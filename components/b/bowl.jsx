import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh3b75c1w.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh3b75c1w"/>`,
		"fallback": "whh:bowl",
	});
}

export default Component;
