import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-stbsb9x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-stbsb9x"/>`,
		"fallback": "maki:fast-food-15",
	});
}

export default Component;
