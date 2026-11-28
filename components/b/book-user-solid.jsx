import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjaa4rkcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjaa4rkcf"/>`,
		"fallback": "iconaut:book-user-solid",
	});
}

export default Component;
