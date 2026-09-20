import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3iqqrbav.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3iqqrbav"/>`,
		"fallback": "roentgen:compass-rose",
	});
}

export default Component;
