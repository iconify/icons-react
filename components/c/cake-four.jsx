import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kvnvcfb9m.css';
import '../../css/x/xy97x4bhm.css';
import '../../css/v/v5afgebvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="kvnvcfb9m"/><path class="xy97x4bhm"/><path class="v5afgebvr"/></g>`,
		"fallback": "icon-park:cake-four",
	});
}

export default Component;
