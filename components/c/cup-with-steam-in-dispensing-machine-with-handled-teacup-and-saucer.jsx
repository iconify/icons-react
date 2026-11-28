import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vztls8b-b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vztls8b-b"/>`,
		"fallback": "pinhead:cup-with-steam-in-dispensing-machine-with-handled-teacup-and-saucer",
	});
}

export default Component;
