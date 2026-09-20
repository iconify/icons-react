import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcdjb-bua.css';
import '../../css/r/r2etnzb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcdjb-bua"/><path class="r2etnzb4q"/></g>`,
		"fallback": "reicon:bill4-filled",
	});
}

export default Component;
