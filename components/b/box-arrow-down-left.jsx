import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqhby9b4x.css';
import '../../css/v/vn8zh-asp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nqhby9b4x"/><path class="vn8zh-asp"/></g>`,
		"fallback": "bi:box-arrow-down-left",
	});
}

export default Component;
