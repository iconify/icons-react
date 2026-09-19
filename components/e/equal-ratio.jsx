import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwuviobwk.css';
import '../../css/i/ipazy6blj.css';
import '../../css/w/w72xribnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xwuviobwk"/><path clip-rule="evenodd" class="ipazy6blj"/><path class="w72xribnv"/></g>`,
		"fallback": "icon-park-outline:equal-ratio",
	});
}

export default Component;
