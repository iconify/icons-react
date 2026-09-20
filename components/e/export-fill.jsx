import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oaqnap37d.css';
import '../../css/q/qnfs_cc1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oaqnap37d"/><path clip-rule="evenodd" class="qnfs_cc1g"/></g>`,
		"fallback": "lets-icons:export-fill",
	});
}

export default Component;
