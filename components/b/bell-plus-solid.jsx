import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cx4bwonyh.css';
import '../../css/n/n4g3xacqe.css';
import '../../css/k/kz8vnnv1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cx4bwonyh"/><path class="n4g3xacqe wm-a"/><path class="kz8vnnv1h wm-s"/></g>`,
		"fallback": "withicons:bell-plus-solid",
	});
}

export default Component;
