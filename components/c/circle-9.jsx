import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meb5t1aeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meb5t1aeu"/>`,
		"fallback": "roentgen:circle-9",
	});
}

export default Component;
