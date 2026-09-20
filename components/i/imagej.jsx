import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtq0b4b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtq0b4b6i"/>`,
		"fallback": "thesvg-color:imagej",
	});
}

export default Component;
