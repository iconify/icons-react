import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq1tg9h7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq1tg9h7v"/>`,
		"fallback": "selfhst:audible",
	});
}

export default Component;
