import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osmqatbrk.css';
import '../../css/d/d8xdzrblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="osmqatbrk"/><path class="d8xdzrblg"/></g>`,
		"fallback": "si:archive-duotone",
	});
}

export default Component;
