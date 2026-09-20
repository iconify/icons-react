import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3vpn-b5r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p3vpn-b5r"/>`,
		"fallback": "streamline-flex:incoming-call-solid",
	});
}

export default Component;
