import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upo3lybsw.css';
import '../../css/f/fv5ja_zgn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="upo3lybsw"/><path clip-rule="evenodd" class="fv5ja_zgn"/></g>`,
		"fallback": "heroicons-solid:chip",
	});
}

export default Component;
