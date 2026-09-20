import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chd-g8bzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chd-g8bzc"/>`,
		"fallback": "vaadin:close",
	});
}

export default Component;
