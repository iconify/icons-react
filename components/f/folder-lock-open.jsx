import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciql3ubgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciql3ubgg"/>`,
		"fallback": "mdi:folder-lock-open",
	});
}

export default Component;
