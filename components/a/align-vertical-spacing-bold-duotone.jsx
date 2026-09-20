import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/voneozwzg.css';
import '../../css/r/reudi5qds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="voneozwzg"/><path class="reudi5qds"/></g>`,
		"fallback": "solar:align-vertical-spacing-bold-duotone",
	});
}

export default Component;
