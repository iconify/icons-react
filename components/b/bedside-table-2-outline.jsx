import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf9o9n5rb.css';
import '../../css/k/kpz-x8bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf9o9n5rb"/><path clip-rule="evenodd" class="kpz-x8bdk"/>`,
		"fallback": "solar:bedside-table-2-outline",
	});
}

export default Component;
