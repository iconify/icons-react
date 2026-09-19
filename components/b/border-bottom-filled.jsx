import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl5_it4ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl5_it4ct"/>`,
		"fallback": "boxicons:border-bottom-filled",
	});
}

export default Component;
