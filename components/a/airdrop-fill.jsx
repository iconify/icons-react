import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0uhiy9nl.css';
import '../../css/f/fwin0va_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0uhiy9nl"/><path class="fwin0va_t"/>`,
		"fallback": "mingcute:airdrop-fill",
	});
}

export default Component;
