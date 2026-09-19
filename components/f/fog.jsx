import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nscn5-nve.css';
import '../../css/l/lf31on9ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nscn5-nve"/><path class="lf31on9ld"/></g>`,
		"fallback": "griddy-icons:fog",
	});
}

export default Component;
