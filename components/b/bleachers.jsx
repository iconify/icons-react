import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su32ojj2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su32ojj2e"/>`,
		"fallback": "pinhead:bleachers",
	});
}

export default Component;
