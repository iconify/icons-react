import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8vo07bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8vo07bey"/>`,
		"fallback": "mynaui:bell-plus",
	});
}

export default Component;
