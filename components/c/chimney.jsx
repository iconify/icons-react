import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp69_cbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp69_cbpn"/>`,
		"fallback": "hugeicons:chimney",
	});
}

export default Component;
