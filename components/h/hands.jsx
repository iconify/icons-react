import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e9uruk8bl.css';
import '../../css/z/z7xy-3w1r.css';
import '../../css/v/v1phh24wk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="e9uruk8bl"/><path class="z7xy-3w1r"/><path class="v1phh24wk"/></g>`,
		"fallback": "icon-park:hands",
	});
}

export default Component;
