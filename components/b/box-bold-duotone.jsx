import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wj6b-6x4m.css';
import '../../css/x/xmklcqbxd.css';
import '../../css/j/jo-cfdc1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wj6b-6x4m"/><path class="xmklcqbxd"/><path class="jo-cfdc1z"/></g>`,
		"fallback": "solar:box-bold-duotone",
	});
}

export default Component;
