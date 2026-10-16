import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqiq30b6d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqiq30b6d"/>`,
		"fallback": "energy-icons:hot-rock-20-bold",
	});
}

export default Component;
