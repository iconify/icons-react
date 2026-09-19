import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hj-q_bbkm.css';
import '../../css/l/l16ftss7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hj-q_bbkm"/><path class="l16ftss7w"/></g>`,
		"fallback": "hugeicons:book-bookmark-01",
	});
}

export default Component;
