import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a0pvibcpp.css';
import '../../css/f/f4qzhlbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><rect class="a0pvibcpp"/><path class="f4qzhlbjw"/></g>`,
		"fallback": "akar-icons:dice-6",
	});
}

export default Component;
