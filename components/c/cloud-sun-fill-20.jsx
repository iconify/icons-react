import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri--i_b-k.css';
import '../../css/v/vg2qp3oat.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri--i_b-k"/><path class="vg2qp3oat"/>`,
		"fallback": "garden:cloud-sun-fill-20",
	});
}

export default Component;
