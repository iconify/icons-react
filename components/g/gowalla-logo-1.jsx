import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/roqv57bef.css';
import '../../css/n/nahzejbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="roqv57bef"/><path class="nahzejbds"/></g>`,
		"fallback": "streamline-logos:gowalla-logo-1",
	});
}

export default Component;
