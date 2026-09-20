import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_xr5ubro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_xr5ubro"/>`,
		"fallback": "thesvg:basecamp",
	});
}

export default Component;
