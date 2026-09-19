import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-kbjab1h.css';
import '../../css/m/m95s5yi8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-kbjab1h"/><path class="m95s5yi8q"/>`,
		"fallback": "boxicons:face-alt-3",
	});
}

export default Component;
