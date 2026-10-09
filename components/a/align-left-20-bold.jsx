import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt1m1hp9a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt1m1hp9a"/>`,
		"fallback": "energy-icons:align-left-20-bold",
	});
}

export default Component;
