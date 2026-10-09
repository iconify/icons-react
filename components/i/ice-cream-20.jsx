import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhkg43b8y.css';
import '../../css/b/bxrez7b8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhkg43b8y"/><path class="bxrez7b8v"/>`,
		"fallback": "energy-icons:ice-cream-20",
	});
}

export default Component;
