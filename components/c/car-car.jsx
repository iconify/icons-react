import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl8f78rzv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl8f78rzv"/>`,
		"fallback": "roentgen:car-car",
	});
}

export default Component;
