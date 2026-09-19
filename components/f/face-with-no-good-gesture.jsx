import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8k2-tb-v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8k2-tb-v"/>`,
		"fallback": "dinkie-icons:face-with-no-good-gesture",
	});
}

export default Component;
