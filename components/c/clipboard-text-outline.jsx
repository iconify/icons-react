import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m7n6j24vy.css';
import '../../css/e/e2kb8cc5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clipboard-text-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="m7n6j24vy"/><path class="e2kb8cc5n"/></g></g>`,
		"fallback": "cuida:clipboard-text-outline",
	});
}

export default Component;
