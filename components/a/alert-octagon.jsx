import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y04j6gm0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y04j6gm0w"/>`,
		"fallback": "mdi-light:alert-octagon",
	});
}

export default Component;
