import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b67ejim3l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b67ejim3l"/>`,
		"fallback": "fa7-brands:d-and-d",
	});
}

export default Component;
