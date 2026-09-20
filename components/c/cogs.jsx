import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a502a1b0s.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a502a1b0s"/>`,
		"fallback": "jam:cogs",
	});
}

export default Component;
