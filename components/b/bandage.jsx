import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf28il4io.css';
import '../../css/m/m1ayfna5l.css';
import '../../css/w/wyfa9nbbu.css';
import '../../css/z/z7nwzw02a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 12.17 4.08)" class="xf28il4io"/><rect transform="rotate(45 15.64 .6)" class="m1ayfna5l"/><path class="wyfa9nbbu"/><path class="z7nwzw02a"/></g>`,
		"fallback": "andrsrxn:bandage",
	});
}

export default Component;
