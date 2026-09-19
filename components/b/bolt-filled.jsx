import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh5h3c62c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh5h3c62c"/>`,
		"fallback": "boxicons:bolt-filled",
	});
}

export default Component;
