import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw4b39bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw4b39bqn"/>`,
		"fallback": "iconamoon:arrow-down-1",
	});
}

export default Component;
