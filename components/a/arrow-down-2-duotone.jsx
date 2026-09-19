import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr6bbj9he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr6bbj9he"/>`,
		"fallback": "iconamoon:arrow-down-2-duotone",
	});
}

export default Component;
