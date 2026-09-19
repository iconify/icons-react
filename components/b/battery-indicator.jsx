import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnndfeb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnndfeb9p"/>`,
		"fallback": "iconoir:battery-indicator",
	});
}

export default Component;
