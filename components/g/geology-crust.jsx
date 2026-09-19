import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/voorfjv1s.css';
import '../../css/w/websu8mzr.css';
import '../../css/p/p-vpx1uhj.css';
import '../../css/u/u94sn0bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="voorfjv1s"/><path class="websu8mzr"/><path class="p-vpx1uhj"/><path class="u94sn0bon"/></g>`,
		"fallback": "hugeicons:geology-crust",
	});
}

export default Component;
