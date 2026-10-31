import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cyutu9jes.css';
import '../../css/j/j0wg9tb9m.css';
import '../../css/i/izi2x0_he.css';
import '../../css/n/n75ffj65y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cyutu9jes wm-shadow"/><path class="j0wg9tb9m wm-shadow"/><path class="izi2x0_he"/><path class="n75ffj65y"/></g>`,
		"fallback": "withicons-brutal:folder",
	});
}

export default Component;
