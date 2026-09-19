import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_7hthb3d.css';
import '../../css/i/iorsr0bkz.css';
import '../../css/s/sj_86q2hc.css';
import '../../css/d/dm9cfkb6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i_7hthb3d"/><path class="iorsr0bkz"/><circle class="sj_86q2hc"/><circle class="dm9cfkb6z"/></g>`,
		"fallback": "icon-park:category-management",
	});
}

export default Component;
