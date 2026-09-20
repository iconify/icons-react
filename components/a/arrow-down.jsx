import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw64edj9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw64edj9q"/>`,
		"fallback": "uil:arrow-down",
	});
}

export default Component;
