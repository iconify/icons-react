import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1623dbhn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1623dbhn"/>`,
		"fallback": "pajamas:calendar-overdue",
	});
}

export default Component;
