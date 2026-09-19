import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it526ibql.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it526ibql"/>`,
		"fallback": "whh:cocktail",
	});
}

export default Component;
