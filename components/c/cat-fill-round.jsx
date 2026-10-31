import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u05b4hbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u05b4hbjl"/>`,
		"fallback": "coolicons:cat-fill-round",
	});
}

export default Component;
