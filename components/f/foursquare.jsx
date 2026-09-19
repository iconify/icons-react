import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e079j9kul.css';

const viewBox = {"width":1216,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e079j9kul"/>`,
		"fallback": "fa:foursquare",
	});
}

export default Component;
