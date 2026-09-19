import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gkja0hjng.css';
import '../../css/h/hqei27afp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gkja0hjng"/><path class="hqei27afp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:blowfish",
	});
}

export default Component;
