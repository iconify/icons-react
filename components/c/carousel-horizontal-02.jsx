import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5lc5_hgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5lc5_hgb"/>`,
		"fallback": "hugeicons:carousel-horizontal-02",
	});
}

export default Component;
