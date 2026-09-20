import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npzjambld.css';
import '../../css/n/nvnoeibwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npzjambld"/><path class="nvnoeibwo"/></g>`,
		"fallback": "reicon:heart-broken-filled",
	});
}

export default Component;
