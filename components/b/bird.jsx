import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sqvkio0fi.css';
import '../../css/i/i4bul_b3r.css';
import '../../css/e/eydq-4xri.css';
import '../../css/f/fej8kyand.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sqvkio0fi wm-shadow"/><path class="i4bul_b3r wm-shadow"/><path class="eydq-4xri"/><path class="fej8kyand"/></g>`,
		"fallback": "withicons-brutal:bird",
	});
}

export default Component;
