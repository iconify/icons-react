import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/u/u_i2j5blu.css';
import '../../css/q/qusuuk4wu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="u_i2j5blu"/><path class="qusuuk4wu"/></g>`,
		"fallback": "icon-park-solid:anchor-squre",
	});
}

export default Component;
