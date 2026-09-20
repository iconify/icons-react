import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb6q_6b4c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb6q_6b4c"/>`,
		"fallback": "roentgen:diamond",
	});
}

export default Component;
