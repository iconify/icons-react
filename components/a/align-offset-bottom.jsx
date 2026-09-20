import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe8kw5b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe8kw5b3q"/>`,
		"fallback": "keyline-icons:align-offset-bottom",
	});
}

export default Component;
