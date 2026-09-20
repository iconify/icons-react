import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2fefzbda.css';
import '../../css/t/ttor7fbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2fefzbda"/><path class="ttor7fbzl"/>`,
		"fallback": "selfhst:foss-events",
	});
}

export default Component;
