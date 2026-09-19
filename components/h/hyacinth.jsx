import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rchop6deh.css';
import '../../css/a/a78qkkbzl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rchop6deh"/><path clip-rule="evenodd" class="a78qkkbzl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hyacinth",
	});
}

export default Component;
