import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb-57-h7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb-57-h7l"/>`,
		"fallback": "tabler:calendar-cancel",
	});
}

export default Component;
