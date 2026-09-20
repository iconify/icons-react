import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b834icb8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b834icb8b"/>`,
		"fallback": "roentgen:bricks",
	});
}

export default Component;
