import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wphs3ib7r.css';
import '../../css/l/lw4genb2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wphs3ib7r"/><path class="lw4genb2l"/></g>`,
		"fallback": "bi:box-arrow-up",
	});
}

export default Component;
