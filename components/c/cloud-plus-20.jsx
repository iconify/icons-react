import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e82l9ab8r.css';
import '../../css/k/k6p64wbai.css';
import '../../css/k/k_yg_y1rk.css';
import '../../css/p/p7-shloum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e82l9ab8r"/><path class="k6p64wbai"/><path class="k_yg_y1rk"/><path class="p7-shloum"/>`,
		"fallback": "energy-icons:cloud-plus-20",
	});
}

export default Component;
