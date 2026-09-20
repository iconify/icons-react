import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0byzj5hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0byzj5hc"/>`,
		"fallback": "mdi:image-remove-outline",
	});
}

export default Component;
