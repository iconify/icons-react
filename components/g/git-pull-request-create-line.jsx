import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8vbaccgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8vbaccgb"/>`,
		"fallback": "mingcute:git-pull-request-create-line",
	});
}

export default Component;
