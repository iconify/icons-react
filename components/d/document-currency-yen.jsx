import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imh9d0bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imh9d0bgq"/>`,
		"fallback": "heroicons:document-currency-yen",
	});
}

export default Component;
