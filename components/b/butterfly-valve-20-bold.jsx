import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/barf7s2gy.css';
import '../../css/d/dkfqdrm2d.css';
import '../../css/g/g4dwobbaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="barf7s2gy"/><path class="dkfqdrm2d"/><path class="g4dwobbaj"/>`,
		"fallback": "energy-icons:butterfly-valve-20-bold",
	});
}

export default Component;
