import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzrqqdbdw.css';
import '../../css/u/uqjl00bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzrqqdbdw"/><path class="uqjl00bik"/></g>`,
		"fallback": "healthicons:girl-0105y-24px",
	});
}

export default Component;
