import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxm6s-w5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxm6s-w5m"/>`,
		"fallback": "selfhst:google-cloud-light",
	});
}

export default Component;
