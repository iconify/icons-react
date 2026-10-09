import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekbu-fbrm.css';
import '../../css/x/x_ur3irsn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekbu-fbrm"/><path class="x_ur3irsn"/>`,
		"fallback": "energy-icons:ev-range-20-bold",
	});
}

export default Component;
