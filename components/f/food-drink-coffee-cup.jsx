import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9v9jiznd.css';
import '../../css/z/z1pqwacjw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9v9jiznd"/><path class="z1pqwacjw"/>`,
		"fallback": "streamline-pixel:food-drink-coffee-cup",
	});
}

export default Component;
