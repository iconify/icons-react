import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9h1pi52i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9h1pi52i"/>`,
		"fallback": "energy-icons:caps-lock-20-bold",
	});
}

export default Component;
