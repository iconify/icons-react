import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xky_hh0hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xky_hh0hj"/>`,
		"fallback": "lineicons:audi",
	});
}

export default Component;
