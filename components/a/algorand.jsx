import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ihn5lpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ihn5lpo"/>`,
		"fallback": "thesvg:algorand",
	});
}

export default Component;
