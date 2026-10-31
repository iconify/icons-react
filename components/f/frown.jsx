import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/i/ibb1isbvp.css';
import '../../css/o/o67y8390q.css';
import '../../css/e/e841wlo0j.css';
import '../../css/v/vy5u09bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ibb1isbvp"/><path class="o67y8390q"/><path class="e841wlo0j"/><path class="vy5u09bot"/></g>`,
		"fallback": "withicons-retro:frown",
	});
}

export default Component;
