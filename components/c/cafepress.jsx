import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cukae7boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cukae7boc"/>`,
		"fallback": "thesvg:cafepress",
	});
}

export default Component;
