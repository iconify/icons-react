import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-cit1b4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-cit1b4j"/>`,
		"fallback": "at-icons:arrows-counterclockwise",
	});
}

export default Component;
