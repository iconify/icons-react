import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ltanx-bcv.css';
import '../../css/a/a4ma6hbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ltanx-bcv"/><path class="a4ma6hbgo"/></g>`,
		"fallback": "tabler:brand-vite",
	});
}

export default Component;
