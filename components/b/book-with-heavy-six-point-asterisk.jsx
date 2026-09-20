import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnj1zubho.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnj1zubho"/>`,
		"fallback": "pinhead:book-with-heavy-six-point-asterisk",
	});
}

export default Component;
