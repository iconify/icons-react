import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_eu4btt.css';
import '../../css/j/j_lgq2b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wl_eu4btt"/><path class="j_lgq2b4j"/></g>`,
		"fallback": "lets-icons:folder-check-duotone",
	});
}

export default Component;
