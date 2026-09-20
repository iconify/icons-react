import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4h578-1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4h578-1s"/>`,
		"fallback": "mdi:cloud-circle-outline",
	});
}

export default Component;
