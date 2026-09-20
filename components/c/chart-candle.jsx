import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coc-kh2xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coc-kh2xd"/>`,
		"fallback": "tabler:chart-candle",
	});
}

export default Component;
