import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shf4anbna.css';
import '../../css/x/x3xw6n-2f.css';
import '../../css/o/o8rexpb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="shf4anbna"/><path class="x3xw6n-2f"/><path class="o8rexpb5w"/></g>`,
		"fallback": "hugeicons:affiliate",
	});
}

export default Component;
