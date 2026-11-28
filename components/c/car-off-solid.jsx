import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxf9zc3us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxf9zc3us"/>`,
		"fallback": "iconaut:car-off-solid",
	});
}

export default Component;
