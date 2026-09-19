import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j67s_gr-f.css';
import '../../css/u/utn_onqwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j67s_gr-f"/><path class="utn_onqwi"/></g>`,
		"fallback": "hugeicons:folder-down",
	});
}

export default Component;
