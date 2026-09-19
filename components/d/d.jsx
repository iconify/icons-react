import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmw-89bjz.css';
import '../../css/l/lw140y69v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dmw-89bjz"/><path class="lw140y69v"/></g>`,
		"fallback": "cryptocurrency-color:d",
	});
}

export default Component;
