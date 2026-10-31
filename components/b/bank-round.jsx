import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srza-f5oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srza-f5oe"/>`,
		"fallback": "coolicons:bank-round",
	});
}

export default Component;
