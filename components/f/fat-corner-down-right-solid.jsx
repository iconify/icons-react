import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnd6hcbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnd6hcbru"/>`,
		"fallback": "mynaui:fat-corner-down-right-solid",
	});
}

export default Component;
