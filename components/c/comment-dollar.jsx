import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bot_9nbfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bot_9nbfk"/>`,
		"fallback": "fa-solid:comment-dollar",
	});
}

export default Component;
