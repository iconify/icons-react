import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfd28zbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfd28zbhz"/>`,
		"fallback": "uil:bus-alt",
	});
}

export default Component;
