import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiexm0b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oiexm0b7v"/>`,
		"fallback": "si:credit-card-detailed-fill",
	});
}

export default Component;
