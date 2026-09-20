import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t81o7zwgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t81o7zwgl"/>`,
		"fallback": "proicons:highlighter-accent",
	});
}

export default Component;
