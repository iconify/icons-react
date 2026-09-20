import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsop0413d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsop0413d"/>`,
		"fallback": "reicon:bag2-filled",
	});
}

export default Component;
