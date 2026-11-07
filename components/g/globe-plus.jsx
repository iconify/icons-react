import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8z3vlewz.css';
import '../../css/j/jxmitlb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8z3vlewz"/><path class="jxmitlb5h"/></g>`,
		"fallback": "vadivam:globe-plus",
	});
}

export default Component;
