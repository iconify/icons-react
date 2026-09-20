import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4tw2iwcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4tw2iwcp"/>`,
		"fallback": "thesvg-color:gravatar",
	});
}

export default Component;
