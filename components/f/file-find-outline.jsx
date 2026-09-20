import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuz_j3b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuz_j3b5z"/>`,
		"fallback": "mdi:file-find-outline",
	});
}

export default Component;
