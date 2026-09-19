import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcrav4bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcrav4bhy"/>`,
		"fallback": "bx:bx-movie",
	});
}

export default Component;
