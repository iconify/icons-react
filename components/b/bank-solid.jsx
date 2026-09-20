import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3ww44f3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3ww44f3z"/>`,
		"fallback": "mynaui:bank-solid",
	});
}

export default Component;
