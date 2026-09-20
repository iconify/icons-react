import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uelfvgb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uelfvgb5k"/>`,
		"fallback": "mdi:folder-network-outline",
	});
}

export default Component;
