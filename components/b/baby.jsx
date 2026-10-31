import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wfg6-hbjv.css';
import '../../css/s/skzzn88al.css';
import '../../css/n/n3slx0uls.css';
import '../../css/m/mri8kfbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wfg6-hbjv wm-shadow"/><path class="skzzn88al wm-shadow"/><path class="n3slx0uls"/><path class="mri8kfbnr"/></g>`,
		"fallback": "withicons-brutal:baby",
	});
}

export default Component;
