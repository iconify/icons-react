import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjr9mvbdy.css';
import '../../css/p/p0bo990gi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjr9mvbdy"/><path class="p0bo990gi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:eye-in-speech-bubble",
	});
}

export default Component;
