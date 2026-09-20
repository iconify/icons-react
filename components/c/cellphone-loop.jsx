import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raphvibhn.css';
import '../../css/c/cjxzckb3x.css';
import '../../css/i/i4ctr12sy.css';
import '../../css/m/m8tiflbie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="raphvibhn"/><path clip-rule="evenodd" class="cjxzckb3x"/><path clip-rule="evenodd" class="i4ctr12sy"/><path clip-rule="evenodd" class="m8tiflbie"/></g>`,
		"fallback": "pepicons-pencil:cellphone-loop",
	});
}

export default Component;
