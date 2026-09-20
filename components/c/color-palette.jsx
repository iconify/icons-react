import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw4sg4bok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw4sg4bok"/>`,
		"fallback": "zondicons:color-palette",
	});
}

export default Component;
