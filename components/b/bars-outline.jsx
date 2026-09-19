import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1q4wbpj.css';
import '../../css/g/g1jm-mivo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1q4wbpj"/><path class="g1jm-mivo"/></g>`,
		"fallback": "glyphs:bars-outline",
	});
}

export default Component;
