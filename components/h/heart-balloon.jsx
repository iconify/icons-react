import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dvevkxsgf.css';
import '../../css/k/k78ell8ue.css';
import '../../css/e/ecszjobpi.css';
import '../../css/m/mm_isivjv.css';
import '../../css/f/fhg6mvbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dvevkxsgf wm-shadow"/><path class="k78ell8ue"/><path class="ecszjobpi"/><path class="mm_isivjv"/><path class="fhg6mvbhj"/></g>`,
		"fallback": "withicons-retro:heart-balloon",
	});
}

export default Component;
