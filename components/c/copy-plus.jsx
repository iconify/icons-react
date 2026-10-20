import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/javdb8bpj.css';
import '../../css/i/i__cjqi2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="javdb8bpj"/><path class="i__cjqi2o"/></g>`,
		"fallback": "vadivam:copy-plus",
	});
}

export default Component;
