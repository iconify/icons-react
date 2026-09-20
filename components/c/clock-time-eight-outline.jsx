import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzg8wbc9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzg8wbc9q"/>`,
		"fallback": "mdi:clock-time-eight-outline",
	});
}

export default Component;
