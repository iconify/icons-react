import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_1butgsu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_1butgsu"/>`,
		"fallback": "at-icons:boots",
	});
}

export default Component;
