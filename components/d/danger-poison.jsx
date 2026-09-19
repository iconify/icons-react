import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrk-757mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrk-757mf"/>`,
		"fallback": "guidance:danger-poison",
	});
}

export default Component;
