import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-q-p1bwi.css';
import '../../css/u/u92x8ejul.css';
import '../../css/q/qgl0xjg6b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-q-p1bwi"/><path class="u92x8ejul"/><path class="qgl0xjg6b"/>`,
		"fallback": "energy-icons:badge-x-20-bold",
	});
}

export default Component;
