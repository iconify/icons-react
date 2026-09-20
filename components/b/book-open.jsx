import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik7tlkp_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik7tlkp_y"/>`,
		"fallback": "meteor-icons:book-open",
	});
}

export default Component;
