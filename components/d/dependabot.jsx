import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p822d64mu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p822d64mu"/>`,
		"fallback": "catppuccin:dependabot",
	});
}

export default Component;
