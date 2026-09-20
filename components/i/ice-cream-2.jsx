import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8cuki8wg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8cuki8wg"/>`,
		"fallback": "roentgen:ice-cream-2",
	});
}

export default Component;
