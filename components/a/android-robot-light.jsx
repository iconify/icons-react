import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjq7m9irb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjq7m9irb"/>`,
		"fallback": "selfhst:android-robot-light",
	});
}

export default Component;
