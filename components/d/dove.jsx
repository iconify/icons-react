import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x45c82bem.css';
import '../../css/s/sv8elphhy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x45c82bem"/><path class="sv8elphhy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dove",
	});
}

export default Component;
