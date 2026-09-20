import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nptt1nbww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nptt1nbww"/>`,
		"fallback": "raphael:download",
	});
}

export default Component;
