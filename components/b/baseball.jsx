import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/f/fajr2visx.css';
import '../../css/c/cx1iwbbjz.css';
import '../../css/x/xz_loxkcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="fajr2visx"/><path class="cx1iwbbjz"/><path class="xz_loxkcw"/></g>`,
		"fallback": "streamline-kameleon-color:baseball",
	});
}

export default Component;
