import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5x5vhbuo.css';
import '../../css/l/lqs-zacmi.css';
import '../../css/l/lek5l1b7q.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m5x5vhbuo"/><path class="lqs-zacmi"/><path class="lek5l1b7q"/></g>`,
		"fallback": "cif:cm",
	});
}

export default Component;
