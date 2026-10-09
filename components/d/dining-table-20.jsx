import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxtlldbyo.css';
import '../../css/d/dezgnhv9l.css';
import '../../css/q/qqf7r7bcl.css';
import '../../css/c/c2ym01bpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxtlldbyo"/><path class="dezgnhv9l"/><path class="qqf7r7bcl"/><path class="c2ym01bpy"/>`,
		"fallback": "energy-icons:dining-table-20",
	});
}

export default Component;
