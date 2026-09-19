import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bdsrpkbit.css';
import '../../css/c/conp7ej9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bdsrpkbit"/><path class="conp7ej9l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:castle",
	});
}

export default Component;
