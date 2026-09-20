import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig8js3b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig8js3b9f"/>`,
		"fallback": "weui:bellring-on-outlined",
	});
}

export default Component;
