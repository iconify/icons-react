import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkhadmbts.css';
import '../../css/g/grl6g783m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xkhadmbts"/><path class="grl6g783m"/></g>`,
		"fallback": "reicon:circle-bottom-up-filled",
	});
}

export default Component;
