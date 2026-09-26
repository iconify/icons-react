import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwwotl5zq.css';
import '../../css/s/s7ctylhan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uwwotl5zq"/><path class="s7ctylhan"/></g>`,
		"fallback": "solar:arrow-up-from-line-outline",
	});
}

export default Component;
