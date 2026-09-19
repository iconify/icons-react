import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a0pvibcpp.css';
import '../../css/c/c8a5by7uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><rect class="a0pvibcpp"/><path class="c8a5by7uq"/></g>`,
		"fallback": "akar-icons:dice-5",
	});
}

export default Component;
