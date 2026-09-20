import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yuc8gccnh.css';
import '../../css/m/mgmp611jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yuc8gccnh"/><rect class="mgmp611jv"/></g>`,
		"fallback": "majesticons:distribute-vertical-line",
	});
}

export default Component;
