import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izq-akrqt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izq-akrqt"/>`,
		"fallback": "entypo:chevron-down",
	});
}

export default Component;
