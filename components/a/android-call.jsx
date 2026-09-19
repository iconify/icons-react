import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlacl_i2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlacl_i2p"/>`,
		"fallback": "ion:android-call",
	});
}

export default Component;
