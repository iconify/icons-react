import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv0a2vbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv0a2vbww"/>`,
		"fallback": "mynaui:chevron-left-square-solid",
	});
}

export default Component;
