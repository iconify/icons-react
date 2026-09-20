import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v463yrbvf.css';
import '../../css/q/qat1j1bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v463yrbvf"/><path clip-rule="evenodd" class="qat1j1bpr"/>`,
		"fallback": "si:ai-inventory-fill",
	});
}

export default Component;
