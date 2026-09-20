import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk2na2b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk2na2b6y"/>`,
		"fallback": "mdi:battery-bluetooth-100",
	});
}

export default Component;
