import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrcg_m-ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrcg_m-ru"/>`,
		"fallback": "withicons:arrow-right-to-line-solid",
	});
}

export default Component;
