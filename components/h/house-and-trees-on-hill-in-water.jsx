import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnj3ggbkb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnj3ggbkb"/>`,
		"fallback": "pinhead:house-and-trees-on-hill-in-water",
	});
}

export default Component;
