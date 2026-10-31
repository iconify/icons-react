import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnxw1k5ye.css';
import '../../css/u/urb6y16ft.css';
import '../../css/c/c4iuvactu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wnxw1k5ye"/><path class="urb6y16ft wm-shadow"/><path class="c4iuvactu"/></g>`,
		"fallback": "withicons-brutal:grip-horizontal",
	});
}

export default Component;
