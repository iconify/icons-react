import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsj615bhh.css';
import '../../css/d/dj3-zub5c.css';
import '../../css/t/t41bz1bmx.css';
import '../../css/i/iowujdkjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rsj615bhh wm-k"/><path class="dj3-zub5c wm-k"/><path class="t41bz1bmx wm-k"/><path class="iowujdkjh wm-shine"/></g>`,
		"fallback": "withicons-anime:bold",
	});
}

export default Component;
