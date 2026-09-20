import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtcj90bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtcj90bwi"/>`,
		"fallback": "mynaui:fat-arrow-down-left",
	});
}

export default Component;
