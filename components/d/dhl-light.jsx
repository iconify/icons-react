import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0afn-ovm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0afn-ovm"/>`,
		"fallback": "selfhst:dhl-light",
	});
}

export default Component;
