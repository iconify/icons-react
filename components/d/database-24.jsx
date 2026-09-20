import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgu-0nbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgu-0nbwj"/>`,
		"fallback": "octicon:database-24",
	});
}

export default Component;
