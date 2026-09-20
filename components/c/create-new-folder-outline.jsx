import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ao1cc5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ao1cc5o"/>`,
		"fallback": "mdi:create-new-folder-outline",
	});
}

export default Component;
