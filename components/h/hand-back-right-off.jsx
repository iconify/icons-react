import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhp7x1b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhp7x1b2o"/>`,
		"fallback": "mdi:hand-back-right-off",
	});
}

export default Component;
