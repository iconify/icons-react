import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldwjd48ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldwjd48ex primary"/>`,
		"fallback": "iconaut:chevrons-left-right-duotone",
	});
}

export default Component;
