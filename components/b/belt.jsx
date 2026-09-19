import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f3t_7nm-x.css';
import '../../css/r/ry5irt4_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f3t_7nm-x"/><path class="ry5irt4_c"/></g>`,
		"fallback": "icon-park-outline:belt",
	});
}

export default Component;
