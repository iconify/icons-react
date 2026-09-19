import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr07urp8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr07urp8m"/>`,
		"fallback": "carbon:headphones",
	});
}

export default Component;
