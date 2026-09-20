import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvq1r7byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvq1r7byr"/>`,
		"fallback": "mynaui:arrow-long-up-right-solid",
	});
}

export default Component;
