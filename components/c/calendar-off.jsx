import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uc5oe23ux.css';
import '../../css/o/o5lefjbra.css';
import '../../css/t/t4nz_j9-c.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uc5oe23ux wm-k"/><path class="o5lefjbra"/><path class="t4nz_j9-c"/><path class="wm-s xgn8g_bte"/></g>`,
		"fallback": "withicons-bauhaus:calendar-off",
	});
}

export default Component;
