import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf4rnuboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf4rnuboa"/>`,
		"fallback": "streamline-block:content-glasses",
	});
}

export default Component;
