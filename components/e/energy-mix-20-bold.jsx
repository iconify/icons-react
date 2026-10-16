import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdest5b8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdest5b8f"/>`,
		"fallback": "energy-icons:energy-mix-20-bold",
	});
}

export default Component;
