import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t91dthp7l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t91dthp7l"/>`,
		"fallback": "rivet-icons:info-circle-solid",
	});
}

export default Component;
