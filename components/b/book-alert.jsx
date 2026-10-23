import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc2jqdb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc2jqdb-e"/>`,
		"fallback": "vadivam:book-alert",
	});
}

export default Component;
