import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5jqo_aix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5jqo_aix"/>`,
		"fallback": "coolicons:calendar-minus-fill-round",
	});
}

export default Component;
