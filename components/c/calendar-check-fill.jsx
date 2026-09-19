import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tul49hb6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tul49hb6p"/>`,
		"fallback": "bi:calendar-check-fill",
	});
}

export default Component;
