import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmpbyzcwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmpbyzcwz"/>`,
		"fallback": "energy-icons:acid-rain-20-bold",
	});
}

export default Component;
