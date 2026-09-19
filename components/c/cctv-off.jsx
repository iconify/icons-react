import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fxh2tf26t.css';
import '../../css/f/fkxmg5b_v.css';
import '../../css/o/ogsqvhb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fxh2tf26t"/><path class="fkxmg5b_v"/><path class="ogsqvhb8i"/></g>`,
		"fallback": "hugeicons:cctv-off",
	});
}

export default Component;
