import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpyz49q5o.css';
import '../../css/d/dvf_gvr6i.css';
import '../../css/l/lq-djpb4j.css';
import '../../css/l/l9o29qb_q.css';
import '../../css/h/h3_2q8qzi.css';
import '../../css/y/yodzen-to.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpyz49q5o"/><g transform="matrix(.7 0 0 .7 10 10)" class="dvf_gvr6i"><path class="lq-djpb4j"/><circle class="l9o29qb_q"/><circle class="h3_2q8qzi"/><circle class="yodzen-to"/></g>`,
		"fallback": "material-icon-theme:folder-jupyter-open",
	});
}

export default Component;
