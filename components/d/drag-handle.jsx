import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dj8zxibgk.css';
import '../../css/g/gv0068sbg.css';
import '../../css/d/dv-gida4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dj8zxibgk wm-shadow"/><path class="gv0068sbg wm-shadow"/><path class="dv-gida4a"/></g>`,
		"fallback": "withicons-brutal:drag-handle",
	});
}

export default Component;
