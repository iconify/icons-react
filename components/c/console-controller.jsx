import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqf1rnq5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqf1rnq5v"/>`,
		"fallback": "game-icons:console-controller",
	});
}

export default Component;
