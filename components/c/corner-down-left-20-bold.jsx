import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oynp_94rk.css';
import '../../css/s/spuk--beu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oynp_94rk"/><path class="spuk--beu"/>`,
		"fallback": "energy-icons:corner-down-left-20-bold",
	});
}

export default Component;
