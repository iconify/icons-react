import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eavl5i9ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eavl5i9ul"/>`,
		"fallback": "tabler:hours-12",
	});
}

export default Component;
