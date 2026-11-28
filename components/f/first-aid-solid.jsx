import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naz5okj2q.css';
import '../../css/r/r907dqbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="naz5okj2q"/><path class="r907dqbor"/></g>`,
		"fallback": "iconaut:first-aid-solid",
	});
}

export default Component;
