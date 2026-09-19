import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqt6cf4sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="framer-logo-outline"><path class="(Stroke) Vector fqt6cf4sl" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:framer-logo-outline",
	});
}

export default Component;
