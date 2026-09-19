import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/yjl_wcbcy.css';
import '../../css/c/ct_8xsb-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><rect transform="rotate(33.038 12.784 2.384)" class="yjl_wcbcy"/><rect transform="rotate(33.038 7.836 6.323)" class="ct_8xsb-x"/></g>`,
		"fallback": "pepicons:chain",
	});
}

export default Component;
