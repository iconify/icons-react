import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucai20b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucai20b0k"/>`,
		"fallback": "solar:alt-arrow-right-broken",
	});
}

export default Component;
