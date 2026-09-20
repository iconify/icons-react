import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6d1dztif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6d1dztif"/>`,
		"fallback": "ri:alert-line",
	});
}

export default Component;
