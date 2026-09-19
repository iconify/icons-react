import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l72lr_b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l72lr_b-c"/>`,
		"fallback": "griddy-icons:backpack",
	});
}

export default Component;
