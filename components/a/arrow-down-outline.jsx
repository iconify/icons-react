import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmjs1io_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmjs1io_v"/>`,
		"fallback": "typcn:arrow-down-outline",
	});
}

export default Component;
