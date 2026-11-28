import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5oyuwx-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary u5oyuwx-b"/>`,
		"fallback": "iconaut:arrow-up-from-line-duotone",
	});
}

export default Component;
