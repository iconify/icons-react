import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qof78ob_g.css';
import '../../css/o/o23xd4biv.css';
import '../../css/k/kh0p6cb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qof78ob_g"/><path class="o23xd4biv"/><path class="kh0p6cb0l"/></g>`,
		"fallback": "reicon:circle-sort-h",
	});
}

export default Component;
