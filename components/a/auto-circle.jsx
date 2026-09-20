import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfcdez32f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfcdez32f"/>`,
		"fallback": "mdi:auto-circle",
	});
}

export default Component;
