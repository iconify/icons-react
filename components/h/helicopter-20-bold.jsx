import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwy4odekr.css';
import '../../css/d/dpw_cg0pn.css';
import '../../css/k/k__4cqdme.css';
import '../../css/u/um41bfbfz.css';
import '../../css/b/bj-tjx8de.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwy4odekr"/><path class="dpw_cg0pn"/><path class="k__4cqdme"/><path class="um41bfbfz"/><path class="bj-tjx8de"/>`,
		"fallback": "energy-icons:helicopter-20-bold",
	});
}

export default Component;
