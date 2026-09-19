import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqu5l21mg.css';
import '../../css/u/uoth9opzu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jqu5l21mg"/><path class="uoth9opzu"/></g>`,
		"fallback": "bi:box-arrow-up-left",
	});
}

export default Component;
