import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny9vdpbbd.css';
import '../../css/k/ku2rlub5r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny9vdpbbd"/><path class="ku2rlub5r"/>`,
		"fallback": "energy-icons:chisel-20",
	});
}

export default Component;
