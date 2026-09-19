import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vupjzmmpw.css';
import '../../css/t/tpe31d3ts.css';
import '../../css/h/hi0hwccqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vupjzmmpw"/><path class="tpe31d3ts"/><path class="hi0hwccqy"/></g>`,
		"fallback": "hugeicons:contact",
	});
}

export default Component;
