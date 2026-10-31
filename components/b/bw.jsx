import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsevqi0bl.css';
import '../../css/d/d0dadzbwi.css';
import '../../css/w/w5cem9faf.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zsevqi0bl"/><path class="d0dadzbwi"/><path class="w5cem9faf"/></g>`,
		"fallback": "cif:bw",
	});
}

export default Component;
