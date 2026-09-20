import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohy9c4bkk.css';
import '../../css/x/xp33xdq-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ohy9c4bkk"/><path class="xp33xdq-g"/></g>`,
		"fallback": "reicon:arrows-down-filled",
	});
}

export default Component;
