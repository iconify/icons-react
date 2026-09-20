import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yab7w5bww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yab7w5bww"/>`,
		"fallback": "streamline-block:basic-arrows-up-left",
	});
}

export default Component;
