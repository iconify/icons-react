import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/invhf0-gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="invhf0-gq"/>`,
		"fallback": "andrsrxn:currency-eur",
	});
}

export default Component;
