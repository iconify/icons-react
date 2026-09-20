import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke7b5obcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke7b5obcu"/>`,
		"fallback": "mynaui:fat-corner-left-down-solid",
	});
}

export default Component;
