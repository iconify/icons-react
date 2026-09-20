import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6o7fihkv.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/ra6fhob8w.css';
import '../../css/s/sude8ublr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q6o7fihkv"/><g class="mc2zb0bvp"><path class="ra6fhob8w"/><path class="sude8ublr"/></g></g>`,
		"fallback": "solar:full-screen-bold-duotone",
	});
}

export default Component;
