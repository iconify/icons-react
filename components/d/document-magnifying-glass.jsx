import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey279yxxg.css';
import '../../css/a/ahoer4bmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ey279yxxg"/><path clip-rule="evenodd" class="ahoer4bmu"/></g>`,
		"fallback": "heroicons-solid:document-magnifying-glass",
	});
}

export default Component;
