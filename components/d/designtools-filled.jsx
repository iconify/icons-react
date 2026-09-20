import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgorcll_p.css';
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
		"content": `<g class="cuyn6tgcc"><path class="jgorcll_p"/><path class="z9l4lcc3g"/><path class="xkltaebhy"/></g>`,
		"fallback": "reicon:designtools-filled",
	});
}

export default Component;
