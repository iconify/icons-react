import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swrqdc1lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swrqdc1lc"/>`,
		"fallback": "heroicons-outline:check-badge",
	});
}

export default Component;
