import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyt617bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyt617bhn"/>`,
		"fallback": "mingcute:copy-minus-fill",
	});
}

export default Component;
