import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1sukl-mj.css';

const viewBox = {"width":1549,"height":1881};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1sukl-mj"/>`,
		"fallback": "thesvg-color:avanza-light",
	});
}

export default Component;
