import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et8-vkb0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et8-vkb0q"/>`,
		"fallback": "pinhead:hand-holding-heart",
	});
}

export default Component;
