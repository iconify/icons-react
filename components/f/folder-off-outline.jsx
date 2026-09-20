import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tacc1hwhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tacc1hwhs"/>`,
		"fallback": "mdi:folder-off-outline",
	});
}

export default Component;
