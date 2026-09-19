import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnnahnb3d.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnnahnb3d"/>`,
		"fallback": "fa6-brands:buy-n-large",
	});
}

export default Component;
