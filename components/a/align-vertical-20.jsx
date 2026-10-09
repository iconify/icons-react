import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uquk1jb0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uquk1jb0c"/>`,
		"fallback": "energy-icons:align-vertical-20",
	});
}

export default Component;
