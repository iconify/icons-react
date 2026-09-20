import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9bm9xb9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9bm9xb9b"/>`,
		"fallback": "ix:calendar-week",
	});
}

export default Component;
