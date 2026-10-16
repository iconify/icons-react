import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhj96-tym.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhj96-tym"/>`,
		"fallback": "energy-icons:acid-rain-20",
	});
}

export default Component;
