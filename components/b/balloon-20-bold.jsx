import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx1ri5b_k.css';
import '../../css/v/v9p5ihx-c.css';
import '../../css/g/gd_6nq8xf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx1ri5b_k"/><path class="v9p5ihx-c"/><path class="gd_6nq8xf"/>`,
		"fallback": "energy-icons:balloon-20-bold",
	});
}

export default Component;
