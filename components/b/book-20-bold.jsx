import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgtbeeqcp.css';
import '../../css/h/herht5b_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgtbeeqcp"/><path class="herht5b_c"/>`,
		"fallback": "energy-icons:book-20-bold",
	});
}

export default Component;
