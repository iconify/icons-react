import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnrsv1eny.css';
import '../../css/v/vk1wzd-us.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mnrsv1eny"/><path class="vk1wzd-us"/></g>`,
		"fallback": "pepicons-pencil:info-off",
	});
}

export default Component;
