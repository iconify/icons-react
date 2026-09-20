import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzc7ujhxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzc7ujhxo"/>`,
		"fallback": "osmic:bank-14",
	});
}

export default Component;
