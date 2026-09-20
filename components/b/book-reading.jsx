import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc2ri0bea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc2ri0bea"/>`,
		"fallback": "streamline:book-reading",
	});
}

export default Component;
