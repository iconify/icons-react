import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ylazium_d.css';
import '../../css/h/hs4m58byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ylazium_d"/><path class="hs4m58byj"/></g>`,
		"fallback": "andrsrxn:hexagon",
	});
}

export default Component;
