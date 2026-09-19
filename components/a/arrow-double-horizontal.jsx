import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agcbpgbkt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agcbpgbkt"/>`,
		"fallback": "at-icons:arrow-double-horizontal",
	});
}

export default Component;
