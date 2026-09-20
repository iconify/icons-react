import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbp2-cc6v.css';
import '../../css/g/gow3njb7h.css';
import '../../css/r/re52utbdc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zbp2-cc6v"/><path class="gow3njb7h"/><path class="re52utbdc"/></g>`,
		"fallback": "skill-icons:gulp",
	});
}

export default Component;
