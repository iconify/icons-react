import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob0egjsku.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob0egjsku"/>`,
		"fallback": "whh:alarmalt",
	});
}

export default Component;
