import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sw_5q9yuc.css';
import '../../css/z/z98tup51i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sw_5q9yuc wm-k"/><path class="wm-s z98tup51i"/></g>`,
		"fallback": "withicons:bell-plus-gloss",
	});
}

export default Component;
