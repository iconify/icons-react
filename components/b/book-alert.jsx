import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3u3mb96z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3u3mb96z"/>`,
		"fallback": "lucide:book-alert",
	});
}

export default Component;
