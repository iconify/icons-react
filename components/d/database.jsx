import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w22_v0jqn.css';
import '../../css/l/lg_sgwbbl.css';
import '../../css/y/ym253vn8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w22_v0jqn"/><path class="lg_sgwbbl"/><path class="ym253vn8u"/></g>`,
		"fallback": "iconoir:database",
	});
}

export default Component;
