import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5v5hbcke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5v5hbcke"/>`,
		"fallback": "la:code",
	});
}

export default Component;
