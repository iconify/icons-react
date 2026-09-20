import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m937v_b8a.css';
import '../../css/f/fhb3vbc9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m937v_b8a"/><path class="fhb3vbc9r"/></g>`,
		"fallback": "rivet-icons:browser-window",
	});
}

export default Component;
