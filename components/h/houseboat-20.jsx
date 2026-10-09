import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv84ipf1b.css';
import '../../css/s/s2eur9scr.css';
import '../../css/e/eu4khzs_w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv84ipf1b"/><path class="s2eur9scr"/><path class="eu4khzs_w"/>`,
		"fallback": "energy-icons:houseboat-20",
	});
}

export default Component;
