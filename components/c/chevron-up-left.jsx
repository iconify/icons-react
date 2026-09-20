import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drnfbnbfx.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drnfbnbfx"/>`,
		"fallback": "jam:chevron-up-left",
	});
}

export default Component;
