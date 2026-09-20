import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trsafe9kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trsafe9kf"/>`,
		"fallback": "mdi:distribute-vertical-bottom",
	});
}

export default Component;
