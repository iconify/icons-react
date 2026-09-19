import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0gvi5b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0gvi5b4g"/>`,
		"fallback": "gg:border-style-dotted",
	});
}

export default Component;
