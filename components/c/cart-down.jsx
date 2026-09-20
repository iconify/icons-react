import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xge9j9b8p.css';
import '../../css/m/mbf-0cbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xge9j9b8p"/><path class="mbf-0cbcp"/></g>`,
		"fallback": "reicon:cart-down",
	});
}

export default Component;
