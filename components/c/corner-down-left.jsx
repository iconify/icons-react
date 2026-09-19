import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bz6ez9b7t.css';
import '../../css/r/rr3f_jb7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bz6ez9b7t"/><path class="rr3f_jb7l"/></g>`,
		"fallback": "icon-park-outline:corner-down-left",
	});
}

export default Component;
