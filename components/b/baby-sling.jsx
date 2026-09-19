import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w370i_-ni.css';
import '../../css/p/pk-427wln.css';
import '../../css/u/ub7r5_brs.css';
import '../../css/t/tsqrdnb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="w370i_-ni"/><path class="pk-427wln"/><path class="ub7r5_brs"/><path class="tsqrdnb5p"/></g>`,
		"fallback": "icon-park:baby-sling",
	});
}

export default Component;
