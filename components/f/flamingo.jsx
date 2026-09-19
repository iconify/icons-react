import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuusgtd7z.css';
import '../../css/k/k65f556lz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tuusgtd7z"/><path class="k65f556lz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flamingo",
	});
}

export default Component;
