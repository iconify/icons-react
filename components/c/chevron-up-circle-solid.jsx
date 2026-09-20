import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eafkvu7mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eafkvu7mu"/>`,
		"fallback": "mynaui:chevron-up-circle-solid",
	});
}

export default Component;
