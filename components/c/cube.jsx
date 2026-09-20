import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro-7c5u2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro-7c5u2j"/>`,
		"fallback": "vaadin:cube",
	});
}

export default Component;
