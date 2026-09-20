import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/t/tv_fp85af.css';
import '../../css/f/f1-3uvb1f.css';
import '../../css/d/djt_l2vuk.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="tv_fp85af"/><path class="f1-3uvb1f"/><path class="djt_l2vuk"/></g>`,
		"fallback": "system-uicons:book-text",
	});
}

export default Component;
