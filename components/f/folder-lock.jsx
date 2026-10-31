import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cyutu9jes.css';
import '../../css/j/j0wg9tb9m.css';
import '../../css/m/mtzxv3bav.css';
import '../../css/v/vw-p3hbvk.css';
import '../../css/v/vwy6-joww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cyutu9jes wm-shadow"/><path class="j0wg9tb9m wm-shadow"/><path class="mtzxv3bav"/><path class="vw-p3hbvk"/><path class="vwy6-joww"/></g>`,
		"fallback": "withicons-brutal:folder-lock",
	});
}

export default Component;
