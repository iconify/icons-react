import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo-wa019m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo-wa019m"/>`,
		"fallback": "bi:arrows",
	});
}

export default Component;
