import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmrgo_bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmrgo_bow"/>`,
		"fallback": "simple-icons:alteryx",
	});
}

export default Component;
