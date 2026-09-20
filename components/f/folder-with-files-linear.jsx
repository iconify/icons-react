import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eel-4gt1b.css';
import '../../css/a/ap3xz1bbt.css';
import '../../css/e/evg2pjbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eel-4gt1b"/><path class="ap3xz1bbt"/><path class="evg2pjbkw"/></g>`,
		"fallback": "solar:folder-with-files-linear",
	});
}

export default Component;
