import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frv3khv0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frv3khv0m"/>`,
		"fallback": "boxicons:bookmark-star-filled",
	});
}

export default Component;
