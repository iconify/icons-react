import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1aff5b5g.css';
import '../../css/x/xkooiebbc.css';
import '../../css/j/jz_4-d7xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1aff5b5g"/><path clip-rule="evenodd" class="xkooiebbc"/><path class="jz_4-d7xn"/></g>`,
		"fallback": "solar:bag-music-2-bold-duotone",
	});
}

export default Component;
