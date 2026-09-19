import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wloev_b6j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wloev_b6j"/>`,
		"fallback": "fa7-solid:crop",
	});
}

export default Component;
