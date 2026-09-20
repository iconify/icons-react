import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smu59bb-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smu59bb-z"/>`,
		"fallback": "selfhst:hydrus-web-light",
	});
}

export default Component;
