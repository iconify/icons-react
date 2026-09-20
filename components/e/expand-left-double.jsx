import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na29cjd5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na29cjd5t"/>`,
		"fallback": "lets-icons:expand-left-double",
	});
}

export default Component;
