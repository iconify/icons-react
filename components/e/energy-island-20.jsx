import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncmcqbb8g.css';
import '../../css/i/ixw6t5b1b.css';
import '../../css/i/iu8op3j7o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncmcqbb8g"/><path class="ixw6t5b1b"/><path class="iu8op3j7o"/>`,
		"fallback": "energy-icons:energy-island-20",
	});
}

export default Component;
