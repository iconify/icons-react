import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga3xw3bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga3xw3bby"/>`,
		"fallback": "noviair-light:hanger",
	});
}

export default Component;
