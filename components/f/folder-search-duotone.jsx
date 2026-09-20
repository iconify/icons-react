import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_eu4btt.css';
import '../../css/h/hh2bxtfwn.css';
import '../../css/j/j4hxno0ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wl_eu4btt"/><circle class="hh2bxtfwn"/><path class="j4hxno0ae"/></g>`,
		"fallback": "lets-icons:folder-search-duotone",
	});
}

export default Component;
