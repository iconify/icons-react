import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c340rhktg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c340rhktg"/>`,
		"fallback": "solar:arrow-to-down-right-bold",
	});
}

export default Component;
