import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpnp057-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpnp057-e"/>`,
		"fallback": "file-icons:audacity",
	});
}

export default Component;
