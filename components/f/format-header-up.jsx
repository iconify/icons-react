import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf7mrlbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf7mrlbzz"/>`,
		"fallback": "mdi:format-header-up",
	});
}

export default Component;
