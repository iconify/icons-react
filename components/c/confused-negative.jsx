import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kqd767tgg.css';
import '../../css/z/zs-kct37k.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsConfusedNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="kqd767tgg"/><path class="zs-kct37k"/></g><defs><clipPath id="healthiconsConfusedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:confused-negative",
	});
}

export default Component;
