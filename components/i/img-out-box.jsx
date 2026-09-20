import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5zvm9q9e.css';
import '../../css/u/u-fcgxbzx.css';
import '../../css/e/e7ble4bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5zvm9q9e"/><path clip-rule="evenodd" class="u-fcgxbzx"/><path class="e7ble4bav"/></g>`,
		"fallback": "lets-icons:img-out-box",
	});
}

export default Component;
