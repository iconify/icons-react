import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4x099b6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4x099b6u"/>`,
		"fallback": "tabler:brand-binance",
	});
}

export default Component;
