import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-t07sbfe.css';
import '../../css/e/evk1eib7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-t07sbfe"/><path class="evk1eib7e"/></g>`,
		"fallback": "reicon:archive4-filled",
	});
}

export default Component;
