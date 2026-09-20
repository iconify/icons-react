import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-atxg24s.css';
import '../../css/n/nwt48v2tu.css';
import '../../css/u/u0_h6rcii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-atxg24s"/><path class="nwt48v2tu"/><path class="u0_h6rcii"/></g>`,
		"fallback": "reicon:database-filled",
	});
}

export default Component;
