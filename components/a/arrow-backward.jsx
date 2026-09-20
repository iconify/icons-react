import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjrbmybqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjrbmybqv"/>`,
		"fallback": "roentgen:arrow-backward",
	});
}

export default Component;
