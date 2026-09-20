import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh6h6accl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh6h6accl"/>`,
		"fallback": "tabler:cursor-off",
	});
}

export default Component;
