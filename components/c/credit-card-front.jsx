import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeoe7r16d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeoe7r16d"/>`,
		"fallback": "bxs:credit-card-front",
	});
}

export default Component;
