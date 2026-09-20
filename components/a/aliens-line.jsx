import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsaa8ob7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsaa8ob7y"/>`,
		"fallback": "ri:aliens-line",
	});
}

export default Component;
