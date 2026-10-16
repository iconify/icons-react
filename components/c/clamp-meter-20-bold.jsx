import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma-ovdbct.css';
import '../../css/o/o95_lvbvb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma-ovdbct"/><path class="o95_lvbvb"/>`,
		"fallback": "energy-icons:clamp-meter-20-bold",
	});
}

export default Component;
