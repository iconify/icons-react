import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tur3e4dtw.css';
import '../../css/g/gft8syi9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tur3e4dtw"/><path class="gft8syi9s"/></g>`,
		"fallback": "ginetex:hot-iron",
	});
}

export default Component;
