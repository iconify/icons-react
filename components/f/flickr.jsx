import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc23rfbpc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc23rfbpc"/>`,
		"fallback": "cib:flickr",
	});
}

export default Component;
