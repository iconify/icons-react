import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1p55kjbg.css';
import '../../css/e/e13f8sblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1p55kjbg"/><path class="e13f8sblt"/></g>`,
		"fallback": "si:building-alt-1-duotone",
	});
}

export default Component;
