import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ritmkr3yi.css';
import '../../css/k/kmw8fq5zg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ritmkr3yi"/><path class="kmw8fq5zg"/>`,
		"fallback": "energy-icons:bed-linen-20-bold",
	});
}

export default Component;
