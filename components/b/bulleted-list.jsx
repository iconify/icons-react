import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi-slvbsj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi-slvbsj"/>`,
		"fallback": "fluent-mdl2:bulleted-list",
	});
}

export default Component;
