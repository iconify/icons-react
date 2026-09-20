import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnnik6v0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnnik6v0o"/>`,
		"fallback": "mdi:closed-caption-outline",
	});
}

export default Component;
