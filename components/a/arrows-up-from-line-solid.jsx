import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru1o54b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru1o54b8j"/>`,
		"fallback": "mynaui:arrows-up-from-line-solid",
	});
}

export default Component;
