import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1airac1t.css';
import '../../css/t/ttex-hbss.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/khgv7bb5q.css';
import '../../css/e/e16kpflfm.css';
import '../../css/k/kz_b09gvt.css';
import '../../css/u/ugydqbb4p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1airac1t"/><path class="ttex-hbss"/><g class="jn8qy4bru"><path class="khgv7bb5q"/><path class="e16kpflfm"/><path class="kz_b09gvt"/><path class="ugydqbb4p"/></g>`,
		"fallback": "openmoji:chocolate-bar",
	});
}

export default Component;
