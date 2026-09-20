import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7w6txbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7w6txbva"/>`,
		"fallback": "si:flag-alt-4-line",
	});
}

export default Component;
