import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syre-1bpm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syre-1bpm"/>`,
		"fallback": "bi:caret-down-fill",
	});
}

export default Component;
