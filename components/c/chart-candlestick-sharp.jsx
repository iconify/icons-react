import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vim-_3b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vim-_3b2r"/>`,
		"fallback": "keyline-icons:chart-candlestick-sharp",
	});
}

export default Component;
