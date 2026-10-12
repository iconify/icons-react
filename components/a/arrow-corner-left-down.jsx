import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9e62_bnc.css';
import '../../css/m/m99fjtwhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9e62_bnc"/><path class="m99fjtwhi"/></g>`,
		"fallback": "andrsrxn:arrow-corner-left-down",
	});
}

export default Component;
