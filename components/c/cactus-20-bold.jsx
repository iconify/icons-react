import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1of7cc9l.css';
import '../../css/b/bw6ycksak.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1of7cc9l"/><path class="bw6ycksak"/>`,
		"fallback": "energy-icons:cactus-20-bold",
	});
}

export default Component;
