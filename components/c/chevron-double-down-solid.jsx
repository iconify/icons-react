import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emug_9xpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emug_9xpp"/>`,
		"fallback": "iconaut:chevron-double-down-solid",
	});
}

export default Component;
