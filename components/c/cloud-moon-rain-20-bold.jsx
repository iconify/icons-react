import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg12-u1eb.css';
import '../../css/t/tzz4r4bub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg12-u1eb"/><path class="tzz4r4bub"/>`,
		"fallback": "energy-icons:cloud-moon-rain-20-bold",
	});
}

export default Component;
