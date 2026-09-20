import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_7373bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_7373bor"/>`,
		"fallback": "mynaui:dots-vertical-square-solid",
	});
}

export default Component;
