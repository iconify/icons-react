import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3lx5fg7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3lx5fg7z"/>`,
		"fallback": "boxicons:chevrons-down-up-filled",
	});
}

export default Component;
