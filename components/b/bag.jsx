import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ya0gf72yh.css';
import '../../css/z/zrybfe-mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ya0gf72yh"/><path class="zrybfe-mz"/></g>`,
		"fallback": "iconoir:bag",
	});
}

export default Component;
