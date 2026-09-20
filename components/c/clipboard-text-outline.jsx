import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfq19quzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfq19quzb"/>`,
		"fallback": "mdi:clipboard-text-outline",
	});
}

export default Component;
