import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2ft19a4y.css';
import '../../css/s/snnvt1bmt.css';
import '../../css/t/ty3oq00ev.css';
import '../../css/h/h_v8x6t3t.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="h2ft19a4y"/><circle class="snnvt1bmt"/><path class="ty3oq00ev"/><path class="h_v8x6t3t"/></g>`,
		"fallback": "thesvg-color:decents",
	});
}

export default Component;
