import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whsuzhbnb.css';
import '../../css/d/d8lq7obnz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whsuzhbnb"/><path class="d8lq7obnz"/>`,
		"fallback": "energy-icons:corner-left-up-20",
	});
}

export default Component;
