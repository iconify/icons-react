import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je1a2q5xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je1a2q5xr"/>`,
		"fallback": "thesvg-color:blazor",
	});
}

export default Component;
