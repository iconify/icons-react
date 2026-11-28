import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gx_2al-pk.css';
import '../../css/c/ce8zlghes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gx_2al-pk secondary"/><path class="ce8zlghes primary"/></g>`,
		"fallback": "iconaut:bookshelf-duotone",
	});
}

export default Component;
