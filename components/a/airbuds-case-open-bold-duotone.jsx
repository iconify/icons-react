import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r__f3wn0s.css';
import '../../css/t/tpa5nbb8v.css';
import '../../css/l/lcnzvy4sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r__f3wn0s"/><path class="tpa5nbb8v"/><path class="lcnzvy4sv"/>`,
		"fallback": "solar:airbuds-case-open-bold-duotone",
	});
}

export default Component;
