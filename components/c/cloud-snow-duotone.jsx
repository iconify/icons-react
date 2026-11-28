import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iaufrlgvv.css';
import '../../css/b/b7ct6ybbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iaufrlgvv secondary"/><path class="b7ct6ybbh primary"/></g>`,
		"fallback": "iconaut:cloud-snow-duotone",
	});
}

export default Component;
