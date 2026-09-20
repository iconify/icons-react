import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owsivq30y.css';
import '../../css/z/z0_mfjiez.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/f/fy5lbwdtl.css';
import '../../css/i/i79ge8ynd.css';
import '../../css/g/gnx9d5a4y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owsivq30y"/><path class="z0_mfjiez"/><g class="x8poo_bjf"><path class="fy5lbwdtl"/><path class="i79ge8ynd"/><path class="gnx9d5a4y"/></g>`,
		"fallback": "openmoji:downcast-face-with-sweat",
	});
}

export default Component;
