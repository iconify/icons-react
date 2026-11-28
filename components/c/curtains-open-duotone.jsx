import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsl08fp4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsl08fp4r primary"/>`,
		"fallback": "iconaut:curtains-open-duotone",
	});
}

export default Component;
