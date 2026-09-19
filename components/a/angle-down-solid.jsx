import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrz-w7bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrz-w7bqf"/>`,
		"fallback": "flowbite:angle-down-solid",
	});
}

export default Component;
