import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuo0z1gmg.css';
import '../../css/h/hk7ioiexi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuo0z1gmg"/><path class="hk7ioiexi"/>`,
		"fallback": "energy-icons:glasses-20-bold",
	});
}

export default Component;
