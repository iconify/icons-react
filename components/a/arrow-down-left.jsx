import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgoo95b-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgoo95b-a"/>`,
		"fallback": "at-icons:arrow-down-left",
	});
}

export default Component;
