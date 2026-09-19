import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyhjwxb0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyhjwxb0v"/>`,
		"fallback": "catppuccin:favicon",
	});
}

export default Component;
