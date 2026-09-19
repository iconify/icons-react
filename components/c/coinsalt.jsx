import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp6xecb8m.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp6xecb8m"/>`,
		"fallback": "whh:coinsalt",
	});
}

export default Component;
