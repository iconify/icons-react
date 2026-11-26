import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nixhzr23g.css';
import '../../css/l/lpeb5vbby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(2.4 0 0 2.4 14.897 -33.423)"><ellipse class="nixhzr23g"/><ellipse class="lpeb5vbby"/></g>`,
		"fallback": "xero-emoji:hole",
	});
}

export default Component;
