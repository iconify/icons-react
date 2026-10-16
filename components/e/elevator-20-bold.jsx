import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev30ibc3d.css';
import '../../css/d/dlfk2kx2y.css';
import '../../css/f/feh6r_b4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev30ibc3d"/><path class="dlfk2kx2y"/><path class="feh6r_b4k"/>`,
		"fallback": "energy-icons:elevator-20-bold",
	});
}

export default Component;
