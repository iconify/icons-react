import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxfhco1bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxfhco1bk"/>`,
		"fallback": "mdi:arrow-up-thin-circle-outline",
	});
}

export default Component;
