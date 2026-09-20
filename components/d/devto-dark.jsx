import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etji4rahb.css';
import '../../css/z/z0vn0t1ke.css';
import '../../css/j/j_k1ii5uc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="etji4rahb"/><path clip-rule="evenodd" class="z0vn0t1ke"/><path class="j_k1ii5uc"/></g>`,
		"fallback": "skill-icons:devto-dark",
	});
}

export default Component;
