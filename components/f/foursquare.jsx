import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwfny99kd.css';

const viewBox = {"width":464,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwfny99kd"/>`,
		"fallback": "ps:foursquare",
	});
}

export default Component;
