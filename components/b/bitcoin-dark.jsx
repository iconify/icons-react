import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpfxpp0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpfxpp0n"/>`,
		"fallback": "selfhst:bitcoin-dark",
	});
}

export default Component;
