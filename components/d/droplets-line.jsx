import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya-2g1bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya-2g1bbv"/>`,
		"fallback": "mingcute:droplets-line",
	});
}

export default Component;
