import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy6w7gb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hy6w7gb6e"/>`,
		"fallback": "streamline-ultimate:call-forwarding-outgoing-1-bold",
	});
}

export default Component;
