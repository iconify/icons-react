import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt8f-3eoh.css';
import '../../css/u/u8g1crnse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt8f-3eoh"/><path class="u8g1crnse"/>`,
		"fallback": "energy-icons:folder-star-20-bold",
	});
}

export default Component;
