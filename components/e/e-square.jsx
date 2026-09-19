import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8mm0wtyn.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8mm0wtyn"/>`,
		"fallback": "vs:e-square",
	});
}

export default Component;
