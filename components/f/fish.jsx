import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/giyos_brm.css';
import '../../css/f/fzaltwbrb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="giyos_brm"/><path class="fzaltwbrb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fish",
	});
}

export default Component;
