import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffx7jjomr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffx7jjomr"/>`,
		"fallback": "roentgen:bus-over-bus-trap",
	});
}

export default Component;
