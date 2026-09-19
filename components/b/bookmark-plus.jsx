import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjvd_wblo.css';
import '../../css/l/lcovd_bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjvd_wblo"/><path class="lcovd_bbl"/>`,
		"fallback": "circum:bookmark-plus",
	});
}

export default Component;
