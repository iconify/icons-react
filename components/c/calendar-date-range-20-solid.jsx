import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj-krkb_k.css';
import '../../css/a/a8x_xccwb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj-krkb_k"/><path clip-rule="evenodd" class="a8x_xccwb"/>`,
		"fallback": "heroicons:calendar-date-range-20-solid",
	});
}

export default Component;
