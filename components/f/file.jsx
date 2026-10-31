import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkgme2y2m.css';
import '../../css/p/pzy8c1b-e.css';
import '../../css/z/z4vorjhsy.css';
import '../../css/m/m-0kunbgv.css';
import '../../css/r/ru-ae-nhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k zkgme2y2m"/><path class="pzy8c1b-e wm-deco"/><path class="wm-k z4vorjhsy"/><path class="m-0kunbgv wm-shadow"/><path class="ru-ae-nhu wm-shine"/></g>`,
		"fallback": "withicons-valentine:file",
	});
}

export default Component;
