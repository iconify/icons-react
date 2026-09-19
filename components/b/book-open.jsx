import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o41f9fxfx.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o41f9fxfx"/>`,
		"fallback": "fa-solid:book-open",
	});
}

export default Component;
