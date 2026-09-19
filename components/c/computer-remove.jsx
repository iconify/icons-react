import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jug5mab_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jug5mab_x"/>`,
		"fallback": "hugeicons:computer-remove",
	});
}

export default Component;
