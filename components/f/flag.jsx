import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5m4sly5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5m4sly5u"/>`,
		"fallback": "rivet-icons:flag",
	});
}

export default Component;
