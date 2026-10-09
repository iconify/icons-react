import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw3vx8xp.css';
import '../../css/j/j-4k2f7vu.css';
import '../../css/w/w3544mb8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw3vx8xp"/><path class="j-4k2f7vu"/><path class="w3544mb8m"/>`,
		"fallback": "energy-icons:esg-20-bold",
	});
}

export default Component;
