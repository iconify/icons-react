import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/che1q43ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="che1q43ri"/>`,
		"fallback": "coolicons:arrow-big-up-fill-round",
	});
}

export default Component;
