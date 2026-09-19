import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rayco9bbe.css';
import '../../css/p/p1v9mob6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rayco9bbe"/><path class="p1v9mob6z"/>`,
		"fallback": "boxicons:handheld-alt-2",
	});
}

export default Component;
