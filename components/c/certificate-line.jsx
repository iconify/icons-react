import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpno97b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpno97b6j"/>`,
		"fallback": "ri:certificate-line",
	});
}

export default Component;
