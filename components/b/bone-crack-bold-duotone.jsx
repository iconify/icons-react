import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-m5ubxc.css';
import '../../css/d/dn1u2whmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-m5ubxc"/><path class="dn1u2whmb"/>`,
		"fallback": "solar:bone-crack-bold-duotone",
	});
}

export default Component;
