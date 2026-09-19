import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mps24piji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mps24piji"/>`,
		"fallback": "boxicons:book-bookmark",
	});
}

export default Component;
