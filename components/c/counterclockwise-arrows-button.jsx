import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-2oiub6r.css';
import '../../css/g/gfor1zb8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-2oiub6r"/><path class="gfor1zb8m"/></g>`,
		"fallback": "fluent-emoji-high-contrast:counterclockwise-arrows-button",
	});
}

export default Component;
