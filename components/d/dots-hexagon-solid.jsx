import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot32r4bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot32r4bbb"/>`,
		"fallback": "mynaui:dots-hexagon-solid",
	});
}

export default Component;
