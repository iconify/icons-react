import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbp6o1bik.css';
import '../../css/y/yfrtf1_-w.css';
import '../../css/z/zw_ijabpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dbp6o1bik"/><path class="yfrtf1_-w"/><path class="zw_ijabpb"/></g>`,
		"fallback": "iconoir:battery-25",
	});
}

export default Component;
