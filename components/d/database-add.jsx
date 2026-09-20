import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7x7g1bne.css';
import '../../css/h/h32jkxbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7x7g1bne"/><path clip-rule="evenodd" class="h32jkxbzn"/></g>`,
		"fallback": "proicons:database-add",
	});
}

export default Component;
