import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqs2jsb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqs2jsb6e"/>`,
		"fallback": "typcn:directions",
	});
}

export default Component;
