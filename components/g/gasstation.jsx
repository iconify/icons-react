import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu0a__bhd.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu0a__bhd"/>`,
		"fallback": "whh:gasstation",
	});
}

export default Component;
