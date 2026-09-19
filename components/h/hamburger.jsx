import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q0yunkbvj.css';
import '../../css/x/xr5r5ib3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="q0yunkbvj"/><path class="xr5r5ib3u"/></g>`,
		"fallback": "icon-park-outline:hamburger",
	});
}

export default Component;
