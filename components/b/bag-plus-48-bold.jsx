import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqivvfbyi.css';
import '../../css/m/m6q9glbvh.css';
import '../../css/k/k598mbbge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqivvfbyi"/><path class="m6q9glbvh"/><path class="k598mbbge"/>`,
		"fallback": "energy-icons:bag-plus-48-bold",
	});
}

export default Component;
