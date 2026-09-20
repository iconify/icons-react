import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hey61xy0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hey61xy0p"/>`,
		"fallback": "tabler:adjustments-heart",
	});
}

export default Component;
