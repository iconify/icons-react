import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/noaqidcbu.css';
import '../../css/x/xbmne38sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="noaqidcbu"/><path class="xbmne38sg"/></g>`,
		"fallback": "reicon:arrow-up-duotone",
	});
}

export default Component;
