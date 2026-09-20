import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u43is9b7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u43is9b7o"/>`,
		"fallback": "qlementine-icons:hi-hat-16",
	});
}

export default Component;
