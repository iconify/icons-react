import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trp5kebab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trp5kebab"/>`,
		"fallback": "mingcute:doc-line",
	});
}

export default Component;
