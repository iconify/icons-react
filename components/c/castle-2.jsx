import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a18a6bw0u.css';
import '../../css/u/u6mkzyzio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a18a6bw0u"/><path class="u6mkzyzio"/></g>`,
		"fallback": "tdesign:castle-2",
	});
}

export default Component;
