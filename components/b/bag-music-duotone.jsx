import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmx7zv9mo.css';
import '../../css/g/g18s0bb4o.css';
import '../../css/c/cnsl5vmdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmx7zv9mo"/><path class="g18s0bb4o"/><path clip-rule="evenodd" class="cnsl5vmdl"/></g>`,
		"fallback": "reicon:bag-music-duotone",
	});
}

export default Component;
