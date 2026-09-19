import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2-id4-1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2-id4-1r"/>`,
		"fallback": "iconamoon:arrow-left-2-thin",
	});
}

export default Component;
