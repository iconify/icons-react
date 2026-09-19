import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uq87yok8l.css';
import '../../css/n/n0ibv68fm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uq87yok8l"/><path class="n0ibv68fm"/></g>`,
		"fallback": "icon-park-solid:halo",
	});
}

export default Component;
