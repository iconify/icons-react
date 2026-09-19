import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0g1y97nl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0g1y97nl"/>`,
		"fallback": "catppuccin:3d",
	});
}

export default Component;
