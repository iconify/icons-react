import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-vbsb8v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-vbsb8v"/>`,
		"fallback": "streamline-block:content-pin",
	});
}

export default Component;
