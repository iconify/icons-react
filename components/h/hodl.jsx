import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zu5j4tr.css';
import '../../css/k/k0k2-dbuj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k2zu5j4tr"/><path class="k0k2-dbuj"/></g>`,
		"fallback": "cryptocurrency-color:hodl",
	});
}

export default Component;
