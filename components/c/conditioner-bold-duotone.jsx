import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zt9_sjbee.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/td2shabyo.css';
import '../../css/y/ymvj8abtr.css';
import '../../css/i/i8124czcp.css';
import '../../css/n/nu47jjbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zt9_sjbee"/><g class="mc2zb0bvp"><path class="td2shabyo"/><path class="ymvj8abtr"/><path class="i8124czcp"/><path class="nu47jjbnm"/></g></g>`,
		"fallback": "solar:conditioner-bold-duotone",
	});
}

export default Component;
