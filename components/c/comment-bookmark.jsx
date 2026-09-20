import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsyn_yf4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsyn_yf4p"/>`,
		"fallback": "mdi:comment-bookmark",
	});
}

export default Component;
