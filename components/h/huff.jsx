import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdggcu0gw.css';
import '../../css/s/sljodwyif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdggcu0gw"/><path class="sljodwyif"/>`,
		"fallback": "catppuccin:huff",
	});
}

export default Component;
