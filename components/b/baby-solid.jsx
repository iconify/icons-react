import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxa9wxb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxa9wxb9k"/>`,
		"fallback": "mynaui:baby-solid",
	});
}

export default Component;
