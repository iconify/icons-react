import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csipk0bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csipk0bxu"/>`,
		"fallback": "mynaui:cloud-sun-solid",
	});
}

export default Component;
