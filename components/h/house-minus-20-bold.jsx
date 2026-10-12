import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i66_yd2fa.css';
import '../../css/o/o-bsg_b-e.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i66_yd2fa"/><path class="o-bsg_b-e"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:house-minus-20-bold",
	});
}

export default Component;
