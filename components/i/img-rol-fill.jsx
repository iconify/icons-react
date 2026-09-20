import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kre2qy1au.css';
import '../../css/w/wfcz2zsqw.css';
import '../../css/s/sqqtubz-x.css';
import '../../css/j/j7p7q7bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kre2qy1au"/><path class="wfcz2zsqw"/><path class="sqqtubz-x"/><path class="j7p7q7bda"/></g>`,
		"fallback": "lets-icons:img-rol-fill",
	});
}

export default Component;
