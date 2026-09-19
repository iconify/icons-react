import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9d3o1b7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9d3o1b7a"/>`,
		"fallback": "bi:filetype-otf",
	});
}

export default Component;
