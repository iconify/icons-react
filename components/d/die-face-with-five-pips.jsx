import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozs9embjz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozs9embjz"/>`,
		"fallback": "pinhead:die-face-with-five-pips",
	});
}

export default Component;
