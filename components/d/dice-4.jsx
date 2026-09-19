import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uynwg_bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uynwg_bsa"/>`,
		"fallback": "bxs:dice-4",
	});
}

export default Component;
