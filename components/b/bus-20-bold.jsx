import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trdnv0bir.css';
import '../../css/e/el1y2bj9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trdnv0bir"/><path class="el1y2bj9j"/>`,
		"fallback": "energy-icons:bus-20-bold",
	});
}

export default Component;
