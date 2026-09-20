import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2-winazk.css';
import '../../css/n/nt7s2xbxg.css';
import '../../css/k/ktmy7ibfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2-winazk"/><path clip-rule="evenodd" class="nt7s2xbxg"/><path class="ktmy7ibfu"/></g>`,
		"fallback": "reicon:basketball-duotone",
	});
}

export default Component;
