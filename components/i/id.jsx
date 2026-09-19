import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyj2m2zvd.css';
import '../../css/v/vrffz93zp.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyj2m2zvd"/><path class="vrffz93zp"/></g>`,
		"fallback": "cif:id",
	});
}

export default Component;
