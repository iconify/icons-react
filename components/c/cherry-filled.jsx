import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se4_yi4nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se4_yi4nq"/>`,
		"fallback": "boxicons:cherry-filled",
	});
}

export default Component;
