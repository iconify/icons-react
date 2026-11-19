import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4ttrfbjj.css';
import '../../css/g/g2n5ekcov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4ttrfbjj"/><path class="g2n5ekcov"/></g>`,
		"fallback": "andrsrxn:currency-bgn",
	});
}

export default Component;
