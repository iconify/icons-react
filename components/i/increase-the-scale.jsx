import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ey6l-111e.css';
import '../../css/b/b33-wybvx.css';
import '../../css/z/zr8f6p4_m.css';
import '../../css/n/nw-lpbbpk.css';
import '../../css/d/dxqwydcbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ey6l-111e"/><path class="b33-wybvx"/><path class="zr8f6p4_m"/><path class="nw-lpbbpk"/><path class="dxqwydcbb"/></g>`,
		"fallback": "icon-park:increase-the-scale",
	});
}

export default Component;
