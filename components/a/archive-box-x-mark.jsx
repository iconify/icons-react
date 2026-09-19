import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5-io1k7w.css';
import '../../css/o/oi3dihbsi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5-io1k7w"/><path clip-rule="evenodd" class="oi3dihbsi"/></g>`,
		"fallback": "heroicons-solid:archive-box-x-mark",
	});
}

export default Component;
