import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdgfu3b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdgfu3b3v"/>`,
		"fallback": "mingcute:drizzle-fill",
	});
}

export default Component;
