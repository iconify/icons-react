import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4kgap47f.css';
import '../../css/k/ka8w_gbvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4kgap47f"/><path clip-rule="evenodd" class="ka8w_gbvw"/></g>`,
		"fallback": "glyphs:eye-bold",
	});
}

export default Component;
