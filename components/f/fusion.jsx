import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alto_b5an.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alto_b5an"/>`,
		"fallback": "thesvg:fusion",
	});
}

export default Component;
