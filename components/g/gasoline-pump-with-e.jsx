import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfvy7ybmc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfvy7ybmc"/>`,
		"fallback": "pinhead:gasoline-pump-with-e",
	});
}

export default Component;
