import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgzi01biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgzi01biz"/>`,
		"fallback": "tabler:device-imac-star",
	});
}

export default Component;
