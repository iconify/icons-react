import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhgk1m0ta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhgk1m0ta"/>`,
		"fallback": "roentgen:apple",
	});
}

export default Component;
