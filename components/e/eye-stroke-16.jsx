import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a7f2abcjc.css';
import '../../css/i/ias5k5bvf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="a7f2abcjc"/><path class="ias5k5bvf"/></g>`,
		"fallback": "garden:eye-stroke-16",
	});
}

export default Component;
