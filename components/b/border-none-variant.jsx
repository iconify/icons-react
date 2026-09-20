import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrtmj5yhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrtmj5yhj"/>`,
		"fallback": "mdi:border-none-variant",
	});
}

export default Component;
