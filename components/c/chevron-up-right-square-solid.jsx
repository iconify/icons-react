import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q04vhtbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q04vhtbup"/>`,
		"fallback": "mynaui:chevron-up-right-square-solid",
	});
}

export default Component;
