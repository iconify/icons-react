import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfkp5kh0x.css';
import '../../css/b/betdo5bqj.css';
import '../../css/b/bb5murbun.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rfkp5kh0x"/><path class="betdo5bqj"/><path class="bb5murbun"/></g>`,
		"fallback": "fluent-emoji-high-contrast:e-mail",
	});
}

export default Component;
