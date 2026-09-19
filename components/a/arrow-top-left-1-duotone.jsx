import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3txsfb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3txsfb9x"/>`,
		"fallback": "iconamoon:arrow-top-left-1-duotone",
	});
}

export default Component;
