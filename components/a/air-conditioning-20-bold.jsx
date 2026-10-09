import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb32smlnz.css';
import '../../css/t/tznykc51m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb32smlnz"/><path class="tznykc51m"/>`,
		"fallback": "energy-icons:air-conditioning-20-bold",
	});
}

export default Component;
