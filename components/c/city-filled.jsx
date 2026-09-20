import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/am1t93upl.css';
import '../../css/u/ug7vnkk1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="am1t93upl"/><path clip-rule="evenodd" class="ug7vnkk1u"/></g>`,
		"fallback": "reicon:city-filled",
	});
}

export default Component;
