import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emikoz2ew.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emikoz2ew"/>`,
		"fallback": "rivet-icons:clipboard-solid",
	});
}

export default Component;
