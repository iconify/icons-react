import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geicrrbfi.css';
import '../../css/l/lxf8azbfy.css';
import '../../css/f/f046cwqjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geicrrbfi"/><path class="lxf8azbfy"/><path class="f046cwqjg"/></g>`,
		"fallback": "reicon:bomb-duotone",
	});
}

export default Component;
