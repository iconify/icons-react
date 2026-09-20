import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpfjh6p0r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpfjh6p0r"/>`,
		"fallback": "roentgen:fire-hydrant",
	});
}

export default Component;
