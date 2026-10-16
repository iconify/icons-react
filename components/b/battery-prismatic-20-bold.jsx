import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv8mvflwb.css';
import '../../css/j/jefef3bul.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv8mvflwb"/><path class="jefef3bul"/>`,
		"fallback": "energy-icons:battery-prismatic-20-bold",
	});
}

export default Component;
