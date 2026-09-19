import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bitmyk5lc.css';
import '../../css/s/szb5aubjg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bitmyk5lc"/><path class="szb5aubjg"/></g>`,
		"fallback": "cryptocurrency-color:bze",
	});
}

export default Component;
