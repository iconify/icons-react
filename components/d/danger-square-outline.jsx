import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzgygcepj.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzgygcepj"/><path class="ay1qmvbxn"/><path clip-rule="evenodd" class="un073yd9d"/></g>`,
		"fallback": "solar:danger-square-outline",
	});
}

export default Component;
