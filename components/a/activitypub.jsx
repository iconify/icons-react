import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc2gsxl_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc2gsxl_h"/>`,
		"fallback": "thesvg-color:activitypub",
	});
}

export default Component;
