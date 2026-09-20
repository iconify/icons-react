import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cedsxbbuw.css';
import '../../css/v/vvu8i0bac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cedsxbbuw"/><path class="vvu8i0bac"/>`,
		"fallback": "vaadin:coin-piles",
	});
}

export default Component;
