import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yba2_offd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yba2_offd"/>`,
		"fallback": "rivet-icons:heart-solid",
	});
}

export default Component;
