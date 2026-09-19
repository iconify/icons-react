import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wq48j3b9c.css';
import '../../css/l/lmsc4wpml.css';
import '../../css/e/ex2tmdbgw.css';
import '../../css/y/yu1wiob5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="wq48j3b9c"/><circle class="lmsc4wpml"/><path class="ex2tmdbgw"/><path class="yu1wiob5p"/></g>`,
		"fallback": "icon-park:archery",
	});
}

export default Component;
