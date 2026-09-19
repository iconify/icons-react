import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r00w072-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r00w072-c"/>`,
		"fallback": "griddy-icons:calendar-check",
	});
}

export default Component;
