import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yak4y02xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yak4y02xr"/>`,
		"fallback": "mdi:account-tie-hat-outline",
	});
}

export default Component;
