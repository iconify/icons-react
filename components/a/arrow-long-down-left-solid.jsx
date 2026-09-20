import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trphc0u7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trphc0u7f"/>`,
		"fallback": "mynaui:arrow-long-down-left-solid",
	});
}

export default Component;
