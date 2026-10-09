import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pore5-dgs.css';
import '../../css/r/r6ewlybsz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pore5-dgs"/><path class="r6ewlybsz"/>`,
		"fallback": "energy-icons:frame-20-bold",
	});
}

export default Component;
