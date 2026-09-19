import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpg5sf9ms.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpg5sf9ms"/>`,
		"fallback": "at-icons:comet",
	});
}

export default Component;
