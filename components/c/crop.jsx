import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e3zc47bax.css';
import '../../css/o/o727glb2e.css';
import '../../css/h/hnchhcx2q.css';
import '../../css/y/y55iiobqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e3zc47bax wm-shadow"/><path class="o727glb2e wm-shadow"/><path class="hnchhcx2q"/><path class="y55iiobqm"/></g>`,
		"fallback": "withicons-brutal:crop",
	});
}

export default Component;
