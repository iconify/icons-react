import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8t6gxblh.css';
import '../../css/o/ot8cn7byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="w8t6gxblh"/><path class="ot8cn7byj"/></g>`,
		"fallback": "feather:credit-card",
	});
}

export default Component;
