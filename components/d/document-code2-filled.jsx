import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adhhybuqu.css';
import '../../css/t/t27vk5qgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adhhybuqu"/><path class="t27vk5qgd"/></g>`,
		"fallback": "reicon:document-code2-filled",
	});
}

export default Component;
