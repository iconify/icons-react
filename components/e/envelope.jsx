import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm55c-0qo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm55c-0qo"/>`,
		"fallback": "rivet-icons:envelope",
	});
}

export default Component;
