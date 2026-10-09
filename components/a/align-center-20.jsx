import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-0u-abei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-0u-abei"/>`,
		"fallback": "energy-icons:align-center-20",
	});
}

export default Component;
