import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okfzjr1ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okfzjr1ec"/>`,
		"fallback": "mdi:account-filter-outline",
	});
}

export default Component;
