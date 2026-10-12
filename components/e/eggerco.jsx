import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2d6budho.css';

const viewBox = {"width":843.89,"height":843.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2d6budho"/>`,
		"fallback": "thesvg-color:eggerco",
	});
}

export default Component;
