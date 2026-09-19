import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lztr7todt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lztr7todt"/>`,
		"fallback": "griddy-icons:airplane-alt-02",
	});
}

export default Component;
