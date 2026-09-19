import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jb6j1ybag.css';
import '../../css/b/bk3dgpqfa.css';
import '../../css/d/dtzqdk4dw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jb6j1ybag"/><path class="bk3dgpqfa"/><path class="dtzqdk4dw"/></g>`,
		"fallback": "icon-park-solid:bachelor-cap",
	});
}

export default Component;
