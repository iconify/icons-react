import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h95f-xbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h95f-xbwl"/>`,
		"fallback": "selfhst:chevereto-light",
	});
}

export default Component;
