import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua2u0eb9o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua2u0eb9o"/>`,
		"fallback": "dinkie-icons:eye-small",
	});
}

export default Component;
