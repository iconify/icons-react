import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7m1t5brv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7m1t5brv"/>`,
		"fallback": "energy-icons:desalination-20-bold",
	});
}

export default Component;
