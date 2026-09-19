import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wp0wlnbao.css';
import '../../css/f/fd-fb67ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wp0wlnbao"/><circle class="fd-fb67ig"/></g>`,
		"fallback": "bitcoin-icons:coins-outline",
	});
}

export default Component;
