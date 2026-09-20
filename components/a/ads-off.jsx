import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvhu8yb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvhu8yb5r"/>`,
		"fallback": "mdi:ads-off",
	});
}

export default Component;
