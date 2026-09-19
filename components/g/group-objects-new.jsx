import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4paek0_x.css';
import '../../css/l/lppl2sbhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4paek0_x"/><path class="lppl2sbhj"/>`,
		"fallback": "carbon:group-objects-new",
	});
}

export default Component;
