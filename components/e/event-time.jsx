import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1wdc4nuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1wdc4nuw"/>`,
		"fallback": "mdi:event-time",
	});
}

export default Component;
