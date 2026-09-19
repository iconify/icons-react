import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d09b06_ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d09b06_ir"/>`,
		"fallback": "iconoir:hat",
	});
}

export default Component;
