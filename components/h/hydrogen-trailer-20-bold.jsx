import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq7ovqb7o.css';
import '../../css/i/iace3isjh.css';
import '../../css/k/kokl_z4xz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq7ovqb7o"/><path class="iace3isjh"/><path class="kokl_z4xz"/>`,
		"fallback": "energy-icons:hydrogen-trailer-20-bold",
	});
}

export default Component;
