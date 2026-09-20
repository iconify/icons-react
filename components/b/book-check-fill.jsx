import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba4_qcapu.css';
import '../../css/e/ej3v9zbgs.css';
import '../../css/u/usqq9cbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ba4_qcapu"/><path class="ej3v9zbgs"/><path class="usqq9cbfw"/></g>`,
		"fallback": "lets-icons:book-check-fill",
	});
}

export default Component;
