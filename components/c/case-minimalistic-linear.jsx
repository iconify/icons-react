import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/in9x9bcfr.css';
import '../../css/u/urf4u6bno.css';
import '../../css/f/f6-18mutx.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="in9x9bcfr"/><path class="urf4u6bno"/><path class="f6-18mutx"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/></g>`,
		"fallback": "solar:case-minimalistic-linear",
	});
}

export default Component;
