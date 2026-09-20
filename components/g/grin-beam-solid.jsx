import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0557kbra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0557kbra"/>`,
		"fallback": "la:grin-beam-solid",
	});
}

export default Component;
