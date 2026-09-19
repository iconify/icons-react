import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/u/u47j2_boj.css';
import '../../css/n/nwipaonmi.css';
import '../../css/i/i94q9of-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><ellipse class="q97o_r-5j"/><path class="u47j2_boj"/><path class="nwipaonmi"/><path class="i94q9of-p"/></g>`,
		"fallback": "icon-park-outline:data-all",
	});
}

export default Component;
