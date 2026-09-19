import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uasa_bcbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uasa_bcbi"/>`,
		"fallback": "bi:airplane-fill",
	});
}

export default Component;
