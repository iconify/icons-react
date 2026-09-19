import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u00_-mbkz.css';
import '../../css/j/j5ih9_brb.css';
import '../../css/x/xl1le1b0a.css';
import '../../css/t/tn0uqua-i.css';
import '../../css/m/mb_v4h7li.css';
import '../../css/t/td15xcbkk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="u00_-mbkz"/><circle class="j5ih9_brb"/><circle class="xl1le1b0a"/><circle class="tn0uqua-i"/><circle class="mb_v4h7li"/><path class="td15xcbkk"/></g>`,
		"fallback": "icon-park-outline:hdd",
	});
}

export default Component;
