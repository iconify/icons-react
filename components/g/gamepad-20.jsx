import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm0hlun-r.css';
import '../../css/b/bfq0kbdtf.css';
import '../../css/c/c_swoacmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm0hlun-r"/><path class="bfq0kbdtf"/><path class="c_swoacmd"/>`,
		"fallback": "energy-icons:gamepad-20",
	});
}

export default Component;
