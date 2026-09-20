import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp8nx4o-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp8nx4o-e"/>`,
		"fallback": "uit:arrow-circle-down",
	});
}

export default Component;
