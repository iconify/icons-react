import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/cp-ocb-3y.css';
import '../../css/y/yof8mbb2y.css';
import '../../css/j/jl-543bif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="cp-ocb-3y"/><path class="yof8mbb2y"/><path class="jl-543bif"/></g>`,
		"fallback": "icon-park-outline:honey",
	});
}

export default Component;
