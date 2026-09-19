import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsfengbia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsfengbia"/>`,
		"fallback": "fluent-emoji-high-contrast:black-square-button",
	});
}

export default Component;
