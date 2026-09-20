import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7sif6b_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7sif6b_m"/>`,
		"fallback": "rivet-icons:exclamation-mark-circle-solid",
	});
}

export default Component;
