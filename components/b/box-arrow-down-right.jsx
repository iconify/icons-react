import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fe65c1b7v.css';
import '../../css/s/scwoigb1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fe65c1b7v"/><path class="scwoigb1z"/></g>`,
		"fallback": "bi:box-arrow-down-right",
	});
}

export default Component;
