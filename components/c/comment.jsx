import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiqe1-61x.css';

const viewBox = {"width":750,"height":820};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiqe1-61x"/>`,
		"fallback": "il:comment",
	});
}

export default Component;
