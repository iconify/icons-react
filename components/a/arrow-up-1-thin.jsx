import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7kyt3olr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7kyt3olr"/>`,
		"fallback": "iconamoon:arrow-up-1-thin",
	});
}

export default Component;
