import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3htvbbcw.css';
import '../../css/z/z9l4lcc3g.css';
import '../../css/x/xkltaebhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x3htvbbcw"/><path class="z9l4lcc3g"/><path class="xkltaebhy"/></g>`,
		"fallback": "reicon:brush3-filled",
	});
}

export default Component;
