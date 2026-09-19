import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhw8cnbky.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhw8cnbky"/>`,
		"fallback": "fluent-emoji-high-contrast:heart-on-fire",
	});
}

export default Component;
