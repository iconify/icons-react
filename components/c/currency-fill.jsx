import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn8g8r50i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn8g8r50i"/>`,
		"fallback": "ri:currency-fill",
	});
}

export default Component;
