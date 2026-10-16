import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1fbdab9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1fbdab9y"/>`,
		"fallback": "energy-icons:cavity-wall-20",
	});
}

export default Component;
