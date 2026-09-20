import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po1kqwbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po1kqwbki"/>`,
		"fallback": "mdi:diving-scuba",
	});
}

export default Component;
