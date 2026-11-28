import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdve8pind.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wdve8pind"/>`,
		"fallback": "iconaut:badge-duotone",
	});
}

export default Component;
