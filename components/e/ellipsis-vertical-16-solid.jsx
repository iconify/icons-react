import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cihmaccna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cihmaccna"/>`,
		"fallback": "heroicons:ellipsis-vertical-16-solid",
	});
}

export default Component;
