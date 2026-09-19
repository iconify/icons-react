import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-pvbhb8e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-pvbhb8e"/>`,
		"fallback": "whh:circlefive",
	});
}

export default Component;
