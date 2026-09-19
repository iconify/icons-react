import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y8kmk8bdt.css';
import '../../css/x/xk4qsobhv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y8kmk8bdt"/><path class="xk4qsobhv"/></g>`,
		"fallback": "icon-park-solid:cook",
	});
}

export default Component;
