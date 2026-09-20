import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcgw_p4gi.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcgw_p4gi"/>`,
		"fallback": "maki:emergency-phone-11",
	});
}

export default Component;
