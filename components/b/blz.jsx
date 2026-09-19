import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u5ed91xnv.css';
import '../../css/r/rhc0pbu7v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="u5ed91xnv"/><path class="rhc0pbu7v"/></g>`,
		"fallback": "cryptocurrency-color:blz",
	});
}

export default Component;
