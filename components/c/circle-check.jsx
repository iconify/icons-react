import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dip7kslof.css';
import '../../css/t/t55-6mljh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dip7kslof"/><path class="t55-6mljh"/>`,
		"fallback": "circum:circle-check",
	});
}

export default Component;
