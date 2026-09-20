import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-1x-c_ik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-1x-c_ik"/>`,
		"fallback": "octicon:arrow-switch-16",
	});
}

export default Component;
