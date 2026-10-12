import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rplgk-p1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rplgk-p1e"/>`,
		"fallback": "energy-icons:equal-20",
	});
}

export default Component;
