import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j8nq_lbrx.css';
import '../../css/k/k_gt2zl8v.css';
import '../../css/a/a7yj9abhm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="j8nq_lbrx"/><path class="k_gt2zl8v"/><path class="a7yj9abhm"/></g>`,
		"fallback": "glyphs-poly:crop",
	});
}

export default Component;
