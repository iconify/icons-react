import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fbo_5_dgq.css';
import '../../css/t/tglpq5bdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fbo_5_dgq"/><path class="tglpq5bdv"/></g>`,
		"fallback": "icon-park-solid:badge",
	});
}

export default Component;
