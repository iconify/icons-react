import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ye_8sbc7b.css';
import '../../css/g/gyu3mbcif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ye_8sbc7b"/><path class="gyu3mbcif primary"/></g>`,
		"fallback": "iconaut:arrow-up-long-duotone",
	});
}

export default Component;
