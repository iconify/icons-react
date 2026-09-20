import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdzw6oeal.css';
import '../../css/f/fm3s1pbab.css';
import '../../css/q/qdabs8b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vdzw6oeal"/><path class="fm3s1pbab"/><path clip-rule="evenodd" class="qdabs8b6s"/></g>`,
		"fallback": "reicon:earbuds-left-filled",
	});
}

export default Component;
