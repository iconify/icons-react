import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnww5rbqk.css';
import '../../css/t/tdk0tnbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cnww5rbqk secondary"/><path class="primary tdk0tnbuy"/></g>`,
		"fallback": "iconaut:external-link-duotone",
	});
}

export default Component;
