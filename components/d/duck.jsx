import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubd38yi7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubd38yi7o"/>`,
		"fallback": "mdi:duck",
	});
}

export default Component;
