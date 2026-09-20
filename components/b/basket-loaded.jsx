import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z67tz0b-g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z67tz0b-g"/>`,
		"fallback": "simple-line-icons:basket-loaded",
	});
}

export default Component;
