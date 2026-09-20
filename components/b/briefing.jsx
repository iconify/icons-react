import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0w2mtbgl.css';
import '../../css/t/tl1zu4bhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0w2mtbgl"/><path class="tl1zu4bhr"/>`,
		"fallback": "selfhst:briefing",
	});
}

export default Component;
