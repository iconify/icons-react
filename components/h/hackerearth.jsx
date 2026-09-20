import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2z_a4ykj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2z_a4ykj"/>`,
		"fallback": "thesvg-color:hackerearth",
	});
}

export default Component;
