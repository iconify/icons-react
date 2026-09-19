import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w--pu8a5q.css';
import '../../css/e/ev65tbb2y.css';
import '../../css/f/f5p-36bbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w--pu8a5q"/><path class="ev65tbb2y"/><path class="f5p-36bbw"/></g>`,
		"fallback": "icon-park-outline:hotel-please-clean",
	});
}

export default Component;
