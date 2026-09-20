import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slpu4qtxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slpu4qtxi"/>`,
		"fallback": "uil:cloud-wind",
	});
}

export default Component;
