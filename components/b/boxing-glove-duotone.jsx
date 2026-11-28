import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zijeiab5m.css';
import '../../css/g/gao6ct6kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zijeiab5m"/><path class="gao6ct6kh primary"/></g>`,
		"fallback": "iconaut:boxing-glove-duotone",
	});
}

export default Component;
