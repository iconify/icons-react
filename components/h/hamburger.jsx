import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7z8vcc8d.css';
import '../../css/u/ubl8dikcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7z8vcc8d"/><path class="ubl8dikcv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hamburger",
	});
}

export default Component;
