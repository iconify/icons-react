import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw_wutbxj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw_wutbxj"/>`,
		"fallback": "garden:chevron-up-stroke-16",
	});
}

export default Component;
