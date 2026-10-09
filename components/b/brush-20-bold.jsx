import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvp9p07ws.css';
import '../../css/n/n3lls7b5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvp9p07ws"/><path class="n3lls7b5k"/>`,
		"fallback": "energy-icons:brush-20-bold",
	});
}

export default Component;
