import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk0_w_boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk0_w_boy"/>`,
		"fallback": "uil:border-out",
	});
}

export default Component;
