import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkvt3bczz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="figma-logo-outline"><path class="(Stroke) Vector wkvt3bczz" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:figma-logo-outline",
	});
}

export default Component;
