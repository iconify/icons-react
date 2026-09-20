import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktqp4pb4c.css';
import '../../css/x/xo1iv13sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ktqp4pb4c"/><path class="xo1iv13sf"/></g>`,
		"fallback": "reicon:filter-duotone",
	});
}

export default Component;
