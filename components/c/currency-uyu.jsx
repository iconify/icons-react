import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxtw1bc7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxtw1bc7w"/>`,
		"fallback": "andrsrxn:currency-uyu",
	});
}

export default Component;
