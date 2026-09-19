import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdo3fkb6b.css';
import '../../css/z/zmsm0nbme.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kdo3fkb6b"/><path class="zmsm0nbme"/></g>`,
		"fallback": "cryptocurrency-color:audr",
	});
}

export default Component;
