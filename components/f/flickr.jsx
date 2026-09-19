import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juf828bpi.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juf828bpi"/>`,
		"fallback": "ps:flickr",
	});
}

export default Component;
