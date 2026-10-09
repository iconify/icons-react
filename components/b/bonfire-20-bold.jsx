import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcv9toj4y.css';
import '../../css/t/tgkamedfu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcv9toj4y"/><path class="tgkamedfu"/>`,
		"fallback": "energy-icons:bonfire-20-bold",
	});
}

export default Component;
