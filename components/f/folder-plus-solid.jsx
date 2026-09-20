import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nam14s5tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nam14s5tq"/>`,
		"fallback": "mynaui:folder-plus-solid",
	});
}

export default Component;
