import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnn5m5bry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnn5m5bry"/>`,
		"fallback": "la:car-side-solid",
	});
}

export default Component;
