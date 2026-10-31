import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b2189nyql.css';
import '../../css/m/mqcqlpb5u.css';
import '../../css/l/lvfr5f83t.css';
import '../../css/u/u89ad6b-h.css';
import '../../css/e/en1umfbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b2189nyql wm-shadow"/><path class="mqcqlpb5u wm-shadow"/><path class="lvfr5f83t"/><path class="u89ad6b-h"/><path class="en1umfbec wm-s"/></g>`,
		"fallback": "withicons-brutal:house-plus",
	});
}

export default Component;
