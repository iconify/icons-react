import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1ff85b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1ff85b3c"/>`,
		"fallback": "simple-icons:guilded",
	});
}

export default Component;
