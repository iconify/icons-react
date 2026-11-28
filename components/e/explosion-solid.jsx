import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxl9-nbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxl9-nbki"/>`,
		"fallback": "iconaut:explosion-solid",
	});
}

export default Component;
