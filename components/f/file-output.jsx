import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ay9r0e4ij.css';
import '../../css/u/u8wurmbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ay9r0e4ij"/><path class="u8wurmbaj"/></g>`,
		"fallback": "hugeicons:file-output",
	});
}

export default Component;
