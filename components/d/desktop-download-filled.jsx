import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbc1n4neh.css';
import '../../css/w/w6we5uqwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nbc1n4neh"/><path class="w6we5uqwh"/></g>`,
		"fallback": "reicon:desktop-download-filled",
	});
}

export default Component;
