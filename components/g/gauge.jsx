import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5et1ab9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5et1ab9l"/>`,
		"fallback": "at-icons:gauge",
	});
}

export default Component;
