import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h60l_bblo.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h60l_bblo"/>`,
		"fallback": "whh:colocation",
	});
}

export default Component;
