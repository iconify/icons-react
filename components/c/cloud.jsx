import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx9bkhb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx9bkhb4p"/>`,
		"fallback": "mynaui:cloud",
	});
}

export default Component;
