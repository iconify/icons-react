import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pt1__bz4q.css';
import '../../css/f/fcagjvcrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pt1__bz4q"/><path clip-rule="evenodd" class="fcagjvcrp"/></g>`,
		"fallback": "griddy-icons:giraffe",
	});
}

export default Component;
