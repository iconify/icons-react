import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl4fr1byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl4fr1byu"/>`,
		"fallback": "si:barcode-fill",
	});
}

export default Component;
