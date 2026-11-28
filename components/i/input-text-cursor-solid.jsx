import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4aro92-m.css';
import '../../css/o/okrau8bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4aro92-m"/><path class="okrau8bnz"/></g>`,
		"fallback": "iconaut:input-text-cursor-solid",
	});
}

export default Component;
