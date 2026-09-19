import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/r/rej93qb9h.css';
import '../../css/s/seoaybclg.css';
import '../../css/i/ikrjhk9fn.css';
import '../../css/u/u6xiebcrd.css';
import '../../css/o/oryupyb4m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="rej93qb9h"/><path class="seoaybclg"/><path class="ikrjhk9fn"/><path class="u6xiebcrd"/><path class="oryupyb4m"/></g>`,
		"fallback": "fluent-emoji-flat:disguised-face",
	});
}

export default Component;
