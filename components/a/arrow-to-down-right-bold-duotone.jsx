import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m35pk283s.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f1k3q-bzm.css';
import '../../css/i/i6x-msbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m35pk283s"/><g class="mc2zb0bvp"><path class="f1k3q-bzm"/><path class="i6x-msbst"/></g></g>`,
		"fallback": "solar:arrow-to-down-right-bold-duotone",
	});
}

export default Component;
