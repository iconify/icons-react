import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krva4ob9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krva4ob9v"/>`,
		"fallback": "mdi:barcode-scan",
	});
}

export default Component;
