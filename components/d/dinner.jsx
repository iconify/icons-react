import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw32n4xnb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw32n4xnb"/>`,
		"fallback": "lineicons:dinner",
	});
}

export default Component;
