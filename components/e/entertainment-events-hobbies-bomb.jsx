import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h46ec79zv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h46ec79zv"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-bomb",
	});
}

export default Component;
