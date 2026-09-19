import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lz3wwsbgm.css';
import '../../css/b/bovmgybbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lz3wwsbgm"/><path class="bovmgybbo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:guitar",
	});
}

export default Component;
