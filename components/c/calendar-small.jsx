import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcdmvd9fw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcdmvd9fw"/>`,
		"fallback": "dinkie-icons:calendar-small",
	});
}

export default Component;
