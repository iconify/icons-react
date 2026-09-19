import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuf0csw1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuf0csw1g"/>`,
		"fallback": "carbon:cloud",
	});
}

export default Component;
