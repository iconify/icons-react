import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hikmf2byl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hikmf2byl"/>`,
		"fallback": "streamline-color:hang-up-1-flat",
	});
}

export default Component;
