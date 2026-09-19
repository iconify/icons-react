import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvbel5oat.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvbel5oat"/>`,
		"fallback": "fa7-brands:flickr",
	});
}

export default Component;
