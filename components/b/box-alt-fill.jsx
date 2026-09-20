import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-x5mdtgx.css';
import '../../css/p/p7cmavbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-x5mdtgx"/><path clip-rule="evenodd" class="p7cmavbqb"/></g>`,
		"fallback": "lets-icons:box-alt-fill",
	});
}

export default Component;
