import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o43r2_blu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o43r2_blu"/>`,
		"fallback": "la:house-damage",
	});
}

export default Component;
