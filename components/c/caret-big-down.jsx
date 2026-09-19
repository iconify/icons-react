import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et7pcw8op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et7pcw8op"/>`,
		"fallback": "boxicons:caret-big-down",
	});
}

export default Component;
