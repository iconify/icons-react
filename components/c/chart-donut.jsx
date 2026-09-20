import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/luahm7wri.css';
import '../../css/e/e-6my1bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="luahm7wri"/><path class="e-6my1bne"/></g>`,
		"fallback": "tabler:chart-donut",
	});
}

export default Component;
