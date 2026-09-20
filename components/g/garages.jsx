import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a99lazb2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a99lazb2r"/>`,
		"fallback": "roentgen:garages",
	});
}

export default Component;
