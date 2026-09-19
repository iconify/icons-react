import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nx5hmg1lc.css';
import '../../css/u/ule3zhb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="nx5hmg1lc"/><path class="ule3zhb1a"/></g>`,
		"fallback": "icon-park-outline:calendar-dot",
	});
}

export default Component;
