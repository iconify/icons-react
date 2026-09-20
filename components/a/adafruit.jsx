import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4ivq3blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4ivq3blw"/>`,
		"fallback": "thesvg-color:adafruit",
	});
}

export default Component;
