import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk3pjmb8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk3pjmb8f"/>`,
		"fallback": "at-icons:bike",
	});
}

export default Component;
