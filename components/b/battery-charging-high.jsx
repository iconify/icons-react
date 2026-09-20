import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqvc2kbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqvc2kbrq"/>`,
		"fallback": "mdi:battery-charging-high",
	});
}

export default Component;
