import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_-gphbhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_-gphbhx"/>`,
		"fallback": "bi:funnel",
	});
}

export default Component;
