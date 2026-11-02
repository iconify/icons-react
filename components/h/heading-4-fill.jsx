import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlpqn8a0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlpqn8a0j"/>`,
		"fallback": "mingcute:heading-4-fill",
	});
}

export default Component;
