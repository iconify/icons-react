import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4f-2496w.css';
import '../../css/g/g655h3mfp.css';
import '../../css/l/lhsdum_sg.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4f-2496w"/><path class="g655h3mfp"/><path class="lhsdum_sg"/></g>`,
		"fallback": "cif:cm",
	});
}

export default Component;
