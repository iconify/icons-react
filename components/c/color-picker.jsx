import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu7m2jb4z.css';
import '../../css/w/w36osgk3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uu7m2jb4z"/><path clip-rule="evenodd" class="w36osgk3s"/></g>`,
		"fallback": "gg:color-picker",
	});
}

export default Component;
