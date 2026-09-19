import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx_mm-sbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx_mm-sbf"/>`,
		"fallback": "bi:calendar",
	});
}

export default Component;
