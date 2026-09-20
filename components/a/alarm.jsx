import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug0q65laj.css';
import '../../css/v/vgkhpv-ll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ug0q65laj"/><path class="vgkhpv-ll"/></g>`,
		"fallback": "rivet-icons:alarm",
	});
}

export default Component;
