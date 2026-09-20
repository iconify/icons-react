import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mut1umbgi.css';
import '../../css/p/pt8jm_b_y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mut1umbgi"/><path class="pt8jm_b_y"/>`,
		"fallback": "vaadin:calendar-o",
	});
}

export default Component;
