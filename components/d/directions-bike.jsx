import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9j79ebqc.css';

const viewBox = {"width":512,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9j79ebqc"/>`,
		"fallback": "zmdi:directions-bike",
	});
}

export default Component;
