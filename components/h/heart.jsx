import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs299dt7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs299dt7a"/>`,
		"fallback": "at-icons:heart",
	});
}

export default Component;
