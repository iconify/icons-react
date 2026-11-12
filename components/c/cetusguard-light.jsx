import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qruf-zb4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qruf-zb4g"/>`,
		"fallback": "selfhst:cetusguard-light",
	});
}

export default Component;
