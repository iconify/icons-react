import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpa4lnb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpa4lnb9p"/>`,
		"fallback": "si:barcode-duotone",
	});
}

export default Component;
