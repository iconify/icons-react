import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab3_j_b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ab3_j_b9j"/>`,
		"fallback": "griddy-icons:beehiiv-filled",
	});
}

export default Component;
