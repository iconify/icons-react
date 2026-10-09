import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm5htjbev.css';
import '../../css/u/u247rkkct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm5htjbev"/><path class="u247rkkct"/>`,
		"fallback": "energy-icons:electrolyser-20-bold",
	});
}

export default Component;
