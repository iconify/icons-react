import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r2pi-9bvu.css';
import '../../css/o/oa1ox9bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r2pi-9bvu"/><path class="oa1ox9bqi"/></g>`,
		"fallback": "hugeicons:chart-bar-line",
	});
}

export default Component;
