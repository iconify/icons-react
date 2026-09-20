import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coipb-bil.css';
import '../../css/e/eo92hjlkw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="coipb-bil"/><path class="eo92hjlkw"/></g>`,
		"fallback": "skill-icons:c",
	});
}

export default Component;
