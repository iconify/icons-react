import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvbcs1z_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvbcs1z_d"/>`,
		"fallback": "rivet-icons:chevron-right",
	});
}

export default Component;
