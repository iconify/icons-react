import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gngs7_bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gngs7_bjr"/>`,
		"fallback": "mingcute:globe-line",
	});
}

export default Component;
