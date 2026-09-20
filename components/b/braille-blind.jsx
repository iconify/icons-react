import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elx6aybyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elx6aybyu"/>`,
		"fallback": "streamline:braille-blind",
	});
}

export default Component;
