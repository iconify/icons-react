import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1ke1lb0i.css';
import '../../css/r/rfyu1acoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1ke1lb0i secondary"/><path class="primary rfyu1acoe"/></g>`,
		"fallback": "iconaut:foldable-stand-duotone",
	});
}

export default Component;
