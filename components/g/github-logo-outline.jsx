import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6o5rl8bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="github-logo-outline"><path class="(Stroke) Vector c6o5rl8bt" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:github-logo-outline",
	});
}

export default Component;
