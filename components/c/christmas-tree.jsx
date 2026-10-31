import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v-i9tkbdq.css';
import '../../css/n/namcbdbmy.css';
import '../../css/w/w-n2vmb1j.css';
import '../../css/v/vy5e8ptfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v-i9tkbdq wm-shadow"/><path class="namcbdbmy wm-shadow"/><path class="w-n2vmb1j"/><path class="vy5e8ptfp"/></g>`,
		"fallback": "withicons-brutal:christmas-tree",
	});
}

export default Component;
