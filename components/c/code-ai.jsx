import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp94h521r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp94h521r"/>`,
		"fallback": "tabler:code-ai",
	});
}

export default Component;
