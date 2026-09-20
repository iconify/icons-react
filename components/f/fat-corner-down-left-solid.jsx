import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prquawbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prquawbka"/>`,
		"fallback": "mynaui:fat-corner-down-left-solid",
	});
}

export default Component;
