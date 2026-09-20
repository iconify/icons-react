import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u80knlb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u80knlb3e"/>`,
		"fallback": "token:etp",
	});
}

export default Component;
