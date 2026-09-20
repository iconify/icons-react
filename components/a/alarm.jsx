import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcfu9rbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcfu9rbts"/>`,
		"fallback": "mdi-light:alarm",
	});
}

export default Component;
