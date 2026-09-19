import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m7n6j24vy.css';
import '../../css/m/m4i8f4b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clipboard-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="m7n6j24vy"/><path class="m4i8f4b0e"/></g></g>`,
		"fallback": "cuida:clipboard-outline",
	});
}

export default Component;
