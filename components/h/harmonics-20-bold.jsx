import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-09ir5il.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-09ir5il"/>`,
		"fallback": "energy-icons:harmonics-20-bold",
	});
}

export default Component;
