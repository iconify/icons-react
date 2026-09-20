import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/peufkcc1d.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="peufkcc1d"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`,
		"fallback": "reicon:info-circle",
	});
}

export default Component;
