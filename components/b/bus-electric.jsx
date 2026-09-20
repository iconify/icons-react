import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klt7ieb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klt7ieb2n"/>`,
		"fallback": "mdi:bus-electric",
	});
}

export default Component;
