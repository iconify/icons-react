import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4kxfbcij.css';
import '../../css/s/sqhl82lfo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4kxfbcij"/><path class="sqhl82lfo"/>`,
		"fallback": "heroicons:gift-top-16-solid",
	});
}

export default Component;
