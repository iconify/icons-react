import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4v2imb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4v2imb_w"/>`,
		"fallback": "selfhst:google-meet-light",
	});
}

export default Component;
