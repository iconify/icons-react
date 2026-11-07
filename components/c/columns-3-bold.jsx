import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4rs5k0ap.css';
import '../../css/d/dan73zqnv.css';
import '../../css/z/z41gnwbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4rs5k0ap"/><path class="dan73zqnv"/><path class="z41gnwbsz"/>`,
		"fallback": "solar:columns-3-bold",
	});
}

export default Component;
