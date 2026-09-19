import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmf4qpbtt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmf4qpbtt"/>`,
		"fallback": "icons8:amex",
	});
}

export default Component;
