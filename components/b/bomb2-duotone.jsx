import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geicrrbfi.css';
import '../../css/l/lxf8azbfy.css';
import '../../css/z/z08r7ybhk.css';
import '../../css/u/uf4od7e4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geicrrbfi"/><path class="lxf8azbfy"/><path class="z08r7ybhk"/><path class="uf4od7e4o"/></g>`,
		"fallback": "reicon:bomb2-duotone",
	});
}

export default Component;
