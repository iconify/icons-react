import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xae-8gbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xae-8gbqf"/>`,
		"fallback": "noviair-light:box-open-check",
	});
}

export default Component;
