import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rux_79ovi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rux_79ovi"/>`,
		"fallback": "at-icons:fish",
	});
}

export default Component;
