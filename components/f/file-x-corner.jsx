import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpufpoz9c.css';
import '../../css/v/vw_1j0cad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cpufpoz9c"/><path class="vw_1j0cad"/></g>`,
		"fallback": "lucide:file-x-corner",
	});
}

export default Component;
