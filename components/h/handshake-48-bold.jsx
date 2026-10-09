import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5mm6ob9l.css';
import '../../css/c/cru7ppb5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5mm6ob9l"/><path class="cru7ppb5l"/>`,
		"fallback": "energy-icons:handshake-48-bold",
	});
}

export default Component;
