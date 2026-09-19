import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnykaab2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnykaab2w"/>`,
		"fallback": "circum:gift",
	});
}

export default Component;
