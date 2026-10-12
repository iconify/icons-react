import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5tn1bc2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5tn1bc2t"/>`,
		"fallback": "energy-icons:hail-20",
	});
}

export default Component;
