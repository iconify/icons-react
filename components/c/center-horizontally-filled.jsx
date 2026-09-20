import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4_ukxvxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k4_ukxvxl"/>`,
		"fallback": "lsicon:center-horizontally-filled",
	});
}

export default Component;
