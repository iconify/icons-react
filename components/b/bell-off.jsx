import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jps-cbb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jps-cbb-c"/>`,
		"fallback": "ci:bell-off",
	});
}

export default Component;
