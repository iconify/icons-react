import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sin0hb8ak.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sin0hb8ak"/>`,
		"fallback": "dinkie-icons:crescent-moon",
	});
}

export default Component;
