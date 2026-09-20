import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjxxpjdrx.css';
import '../../css/l/laem72brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjxxpjdrx"/><path class="laem72brh"/></g>`,
		"fallback": "reicon:dumbbell4-duotone",
	});
}

export default Component;
