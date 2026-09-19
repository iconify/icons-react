import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smvx7zb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="chatbubble-outline"><path class="(Stroke) 27 Ellipse smvx7zb7y" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:chatbubble-outline",
	});
}

export default Component;
