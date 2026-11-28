import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vhklpmewb.css';
import '../../css/y/y1-snpblu.css';
import '../../css/t/t1pug1bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vhklpmewb"/><path class="y1-snpblu"/><path class="t1pug1bay"/></g>`,
		"fallback": "iconaut:first-aid",
	});
}

export default Component;
