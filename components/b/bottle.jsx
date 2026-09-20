import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi3edprxh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi3edprxh"/>`,
		"fallback": "roentgen:bottle",
	});
}

export default Component;
